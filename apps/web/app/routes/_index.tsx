import { Link } from '@remix-run/react';

export default function IndexRoute() {
  return (
    <main className="page">
      <header className="site-header">
        <p className="eyebrow">Data Wand</p>
        <nav className="site-nav" aria-label="Primary">
          <Link to="/">Home</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/use-cases/non-profits">Use Cases</Link>
          <Link to="/download">Download</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <section className="hero">
        <h1>Stop Typing. Start Snapping.</h1>
        <p>
          This Remix staging app is the in-progress full product hub for Data Wand. It now includes navigable public
          marketing routes and will expand into auth, billing, and usage dashboard features.
        </p>
        <div className="cta-row">
          <Link className="button button-primary" to="/download">
            Get Started
          </Link>
          <Link className="button button-secondary" to="/how-it-works">
            See How It Works
          </Link>
        </div>
      </section>
      <footer className="site-footer">Staging environment on Render.</footer>
    </main>
  );
}
