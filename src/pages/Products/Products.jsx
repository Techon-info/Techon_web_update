import { Link } from 'react-router-dom';
import styles from './Products.module.css';
import { featuredProduct as p } from '../../data/products';

const External = ({ href, className, children }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Products = () => (
  <main className={styles.products_page}>
    {/* Hero */}
    <section className={styles.hero_section}>
      <span className={styles.badge}>{p.status} · {p.audienceLine}</span>
      <h1 className={styles.main_heading}>
        <span className={styles.by}>A product by Techon</span>
        {p.name.replace('Techon ', '')}
      </h1>
      <p className={styles.hero_tagline}>{p.tagline}</p>
      <p className={styles.subtitle}>{p.description}</p>
      <div className={styles.cta_row}>
        <External href={p.links.register} className={styles.cta_primary}>Get Started</External>
        <External href={p.links.customize} className={styles.cta_secondary}>Try the free preview</External>
        <External href={p.links.login} className={styles.cta_link}>Log in</External>
      </div>
    </section>

    {/* Problem */}
    <section className={styles.block}>
      <h2 className={styles.heading}>{p.problem.heading}</h2>
      <p className={styles.lead}>{p.problem.text}</p>
      <ul className={styles.pain_grid}>
        {p.problem.pains.map((item) => (
          <li key={item.from} className={styles.pain}>
            <strong>{item.from}</strong>
            <span>{item.issue}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* Features */}
    <section className={styles.block} id="features">
      <h2 className={styles.heading}>Everything your business needs, <span className={styles.gradient_text}>connected</span></h2>
      <div className={styles.cards_grid}>
        {p.features.map((feature) => (
          <article key={feature.title} className={styles.card}>
            <span className={styles.card_label}>{feature.label}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>

    {/* How it works */}
    <section className={`${styles.block} ${styles.dark}`} id="how-it-works">
      <h2 className={styles.heading}>How FlowDesk works</h2>
      <p className={styles.lead}>One enquiry flows all the way to your profit report, with nothing re-typed.</p>
      <ol className={styles.steps}>
        {p.steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.step_number}>{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>

    {/* Industries */}
    <section className={styles.block}>
      <h2 className={styles.heading}>Who it is for</h2>
      <div className={styles.industry_wrap}>
        <div className={styles.industry_col}>
          <h3>Available now</h3>
          <ul>{p.industries.live.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
        <div className={`${styles.industry_col} ${styles.soon}`}>
          <h3>Coming soon</h3>
          <ul>{p.industries.soon.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      </div>
    </section>

    {/* Customization */}
    <section className={styles.block}>
      <div className={styles.custom_card}>
        <div>
          <h2 className={styles.heading_left}>{p.customization.heading}</h2>
          <p className={styles.lead_left}>{p.customization.text}</p>
          <External href={p.links.customize} className={styles.cta_primary}>Open the live preview</External>
        </div>
        <ul className={styles.check_list}>
          {p.customization.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
    </section>

    {/* Plans */}
    <section className={styles.block} id="plans">
      <h2 className={styles.heading}>Choose your plan</h2>
      <p className={styles.lead}>Pricing is shared on request, so you pay for what your business needs.</p>
      <div className={styles.plans_grid}>
        {p.plans.map((plan) => (
          <article key={plan.name} className={`${styles.plan} ${plan.badge ? styles.plan_featured : ''}`}>
            {plan.badge && <span className={styles.plan_badge}>{plan.badge}</span>}
            <h3>{plan.name}</h3>
            <p>{plan.text}</p>
            <ul className={styles.check_list}>
              {plan.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div className={styles.center}>
        <External href={p.links.pricing} className={styles.cta_primary}>See pricing &amp; request a plan</External>
      </div>
    </section>

    {/* Getting started */}
    <section className={styles.block}>
      <h2 className={styles.heading}>Get started in four steps</h2>
      <ol className={styles.steps}>
        {p.getStarted.map((step, index) => (
          <li key={step.title} className={`${styles.step} ${styles.step_light}`}>
            <span className={styles.step_number}>{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>

    {/* FAQ */}
    <section className={styles.block}>
      <h2 className={styles.heading}>Common questions</h2>
      <div className={styles.faq}>
        {p.faqs.map((item) => (
          <details key={item.q} className={styles.faq_item}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className={styles.cta_section}>
      <h2>Ready to run your business from one desk?</h2>
      <p>Start with the free preview, or talk to us and we will help you set up.</p>
      <div className={styles.cta_row}>
        <External href={p.links.register} className={styles.cta_primary}>Get Started</External>
        <Link to="/contact" className={styles.cta_secondary}>Talk to Techon</Link>
      </div>
    </section>
  </main>
);

export default Products;
