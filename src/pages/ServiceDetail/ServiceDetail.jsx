import { Link, Navigate, useParams } from 'react-router-dom';
import styles from './ServiceDetail.module.css';
import { services, getService, processSteps } from '../../data/services';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.slug !== service.slug);
  const workLink = service.link || `/portfolio?category=${service.category}`;
  const workLabel = service.linkLabel || `See our ${service.title.toLowerCase()} work`;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{service.title}</span>
        </nav>
        <h1 className={styles.title}>{service.title}</h1>
        <p className={styles.intro}>{service.intro}</p>
        <div className={styles.cta_row}>
          <Link to="/contact" className={styles.cta_primary}>Get a Free Consultation</Link>
          <Link to={workLink} className={styles.cta_secondary}>{workLabel}</Link>
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.heading}>What you get</h2>
        <div className={styles.cards_grid}>
          {service.offers.map((offer) => (
            <article key={offer.title} className={styles.card}>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </article>
          ))}
        </div>
        <ul className={styles.tags}>
          {service.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </section>

      <section className={`${styles.block} ${styles.dark}`}>
        <h2 className={styles.heading}>How we work</h2>
        <ol className={styles.steps_grid}>
          {processSteps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.step_number}>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.block}>
        <h2 className={styles.heading}>Our other services</h2>
        <ul className={styles.related}>
          {others.map((s) => (
            <li key={s.slug}>
              <Link to={`/services/${s.slug}`}>{s.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.cta_section}>
        <h2>Ready to start your {service.title.toLowerCase()} project?</h2>
        <p>Tell us what you need and we will get back to you with the next steps.</p>
        <Link to="/contact" className={styles.cta_primary}>Contact Us</Link>
      </section>
    </main>
  );
};

export default ServiceDetail;
