import { Link } from '@remix-run/react';

export default function DownloadRoute() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Download</p>
        <h1>Install Data Wand</h1>
        <p>
          Extension and iOS distribution links will be wired into this page as part of the app/dashboard rollout.
          This staging route confirms production-target URL structure.
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
