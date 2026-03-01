import { Link, useParams } from '@remix-run/react';

const labels: Record<string, string> = {
  'non-profits': 'Non-Profits',
  'healthcare-clinics': 'Healthcare Clinics',
  'property-management': 'Property Management',
  'insurance-agencies': 'Insurance Agencies',
  'field-services': 'Field Services',
  'construction': 'Construction',
  'government-offices': 'Government Offices',
  'religious-organizations': 'Religious Organizations'
};

export default function UseCaseSlugRoute() {
  const { slug = '' } = useParams();
  const title = labels[slug] ?? 'Use Case';

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Use Cases</p>
        <h1>{title}</h1>
        <p>
          This route is a staging placeholder for use-case specific messaging and CTAs. It validates dynamic route
          handling and link integrity for `/use-cases/:slug`.
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
