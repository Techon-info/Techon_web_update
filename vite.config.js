import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { pages, organizationJsonLd, breadcrumbFor, SITE_URL, SITE_NAME, DEFAULT_IMAGE } from './src/data/seo.js'

const esc = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const jsonLdTag = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\u003c')}</script>`

const navLinks = Object.keys(pages)
  .map((route) => `<a href="${route}">${esc(pages[route].heading)}</a>`)
  .join(' ')

const fill = (template, route) => {
  const meta = pages[route]
  const url = `${SITE_URL}${route === '/' ? '/' : route}`
  const jsonLd = [organizationJsonLd, breadcrumbFor(route), meta.jsonLd].filter(Boolean).map(jsonLdTag).join('\n    ')
  const noscript = `<noscript><h1>${esc(meta.heading)} | ${esc(SITE_NAME)}</h1><p>${esc(meta.summary)}</p><nav>${navLinks}</nav></noscript>`
  return template
    .replaceAll('__SEO_TITLE__', esc(meta.title))
    .replaceAll('__SEO_DESC__', esc(meta.description))
    .replaceAll('__SEO_URL__', url)
    .replaceAll('__SEO_IMAGE__', DEFAULT_IMAGE)
    .replace('__SEO_JSONLD__', jsonLd)
    .replace('__SEO_NOSCRIPT__', noscript)
}

/**
 * SEO build step. A client-rendered React app ships one empty index.html, so crawlers and
 * link-preview bots would see the same title for every URL. This plugin:
 *  - fills the home page tags (dev + build),
 *  - writes a real HTML file per route (dist/about/index.html ...) with its own title,
 *    description, canonical, Open Graph tags, JSON-LD and a text fallback,
 *  - generates sitemap.xml and robots.txt.
 */
function seoPlugin() {
  let template = ''
  let outDir = 'dist'
  return {
    name: 'techon-seo',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        template = html
        return fill(html, '/')
      },
    },
    closeBundle() {
      if (!template) return
      for (const route of Object.keys(pages)) {
        if (route === '/') continue
        const dir = path.join(outDir, route)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), fill(template, route))
      }
      const today = new Date().toISOString().slice(0, 10)
      const urls = Object.keys(pages)
        .map(
          (route) =>
            `  <url>\n    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${pages[route].priority}</priority>\n  </url>`
        )
        .join('\n')
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      )
      fs.writeFileSync(
        path.join(outDir, 'robots.txt'),
        `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
})
