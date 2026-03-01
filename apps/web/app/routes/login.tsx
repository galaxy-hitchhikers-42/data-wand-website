import { Link } from '@remix-run/react';

export default function LoginRoute() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Auth</p>
        <h1>Login (Planned)</h1>
        <p>This route will be wired to Supabase auth and session management.</p>
        <div className="cta-row">
          <Link className="button button-primary" to="/signup">
            Create Account
          </Link>
          <Link className="button button-secondary" to="/">
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
