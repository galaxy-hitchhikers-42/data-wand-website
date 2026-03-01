import { Link } from '@remix-run/react';

export default function AboutRoute() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">About</p>
        <h1>Built for teams tired of manual data entry</h1>
        <p>
          Data Wand helps offices move handwritten paper data into digital systems fast, with iPhone-based OCR and
          direct autofill workflows.
        </p>
        <div className="cta-row">
          <Link className="button button-secondary" to="/">
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
