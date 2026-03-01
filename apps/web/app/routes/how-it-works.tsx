import { Link } from '@remix-run/react';

export default function HowItWorksRoute() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">How It Works</p>
        <h1>Three steps. Done.</h1>
        <ol className="steps">
          <li>Snap a photo of the completed paper form.</li>
          <li>Data Wand reads handwriting on-device.</li>
          <li>Fields are auto-filled in your destination app.</li>
        </ol>
        <div className="cta-row">
          <Link className="button button-secondary" to="/">
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
