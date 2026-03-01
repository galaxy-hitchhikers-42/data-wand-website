import { Link } from '@remix-run/react';

export default function DashboardUsageRoute() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Dashboard / Usage</p>
        <h1>Usage Metrics (Planned)</h1>
        <p>This page will show extension and iOS activity, credits, and usage trends.</p>
        <div className="cta-row">
          <Link className="button button-secondary" to="/dashboard">
            Back to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
