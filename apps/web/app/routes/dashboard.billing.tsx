import { Link } from '@remix-run/react';

export default function DashboardBillingRoute() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Dashboard / Billing</p>
        <h1>Billing (Planned)</h1>
        <p>This page will connect to Stripe checkout, portal, and subscription status sync.</p>
        <div className="cta-row">
          <Link className="button button-secondary" to="/dashboard">
            Back to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
