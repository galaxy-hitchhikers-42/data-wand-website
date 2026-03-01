import type { LoaderFunctionArgs } from '@remix-run/node';

import { serveStaticPage } from '../lib/static-page.server';

const slugToFile: Record<string, string> = {
  'construction': 'construction.html',
  'field-services': 'field-services.html',
  'government': 'government.html',
  'government-offices': 'government.html',
  'insurance-agencies': 'insurance-agencies.html',
  'non-profits': 'non-profits.html',
  'property-management': 'property-management.html',
  'religious-organizations': 'religious-organizations.html'
};

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug ?? '';
  const file = slugToFile[slug];
  if (!file) {
    throw new Response('Not Found', { status: 404 });
  }

  return serveStaticPage(`use-cases/${file}`);
}
