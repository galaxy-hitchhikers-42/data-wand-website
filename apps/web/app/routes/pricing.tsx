import { Link } from '@remix-run/react';

export default function PricingRoute() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Pricing</p>
        <h1>Simple starter pricing</h1>
        <p>
          Current public plan target is $5/month while billing is being finalized. Stripe production flows are planned
          and remain blocked on EIN/account readiness.
        </p>
        <div className="cta-row">
          <Link className="button button-primary" to="/download">
            Get Started
          </Link>
          <Link className="button button-secondary" to="/">
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
