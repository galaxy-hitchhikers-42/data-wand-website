import type { LoaderFunctionArgs } from '@remix-run/node';

import { serveStaticPage } from '../lib/static-page.server';

export async function loader(_args: LoaderFunctionArgs) {
  return serveStaticPage('about.html');
}
