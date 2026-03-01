import { Link } from 'react-router';

export default function DashboardSettingsRoute() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Dashboard / Settings</p>
        <h1>Settings (Planned)</h1>
        <p>This page will manage profile, team access, and API integration settings.</p>
        <div className="cta-row">
          <Link className="button button-secondary" to="/dashboard">
            Back to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
