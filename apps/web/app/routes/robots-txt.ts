import type { LoaderFunctionArgs } from 'react-router';

const INDEXABLE_HOSTS = new Set(['data-wand.ai', 'www.data-wand.ai']);

function canIndex(hostname: string) {
  return process.env.NODE_ENV === 'production' && INDEXABLE_HOSTS.has(hostname.toLowerCase());
}

export async function loader({ request }: LoaderFunctionArgs) {
  const { hostname } = new URL(request.url);
  const indexable = canIndex(hostname);

  const body = indexable
    ? 'User-agent: *\nAllow: /\n\nSitemap: https://data-wand.ai/sitemap.xml\n'
    : 'User-agent: *\nDisallow: /\n';

  const headers = new Headers({
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    Pragma: 'no-cache'
  });

  if (!indexable) {
    headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }

  return new Response(body, { headers });
}
