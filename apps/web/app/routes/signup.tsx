import { Link } from '@remix-run/react';

export default function SignupRoute() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Auth</p>
        <h1>Sign Up (Planned)</h1>
        <p>This route will create user accounts and bootstrap team/workspace data.</p>
        <div className="cta-row">
          <Link className="button button-secondary" to="/login">
            Already have an account?
          </Link>
          <Link className="button button-secondary" to="/">
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
