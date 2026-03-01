import { Link } from '@remix-run/react';

export default function DashboardRoute() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Dashboard</p>
        <h1>Account Hub (Planned)</h1>
        <p>Protected dashboard routes are scaffolded and ready for auth guards.</p>
        <div className="cta-row">
          <Link className="button button-secondary" to="/dashboard/usage">
            Usage
          </Link>
          <Link className="button button-secondary" to="/dashboard/billing">
            Billing
          </Link>
          <Link className="button button-secondary" to="/dashboard/settings">
            Settings
          </Link>
          <Link className="button button-secondary" to="/">
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
