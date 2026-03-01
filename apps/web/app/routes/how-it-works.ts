import type { LoaderFunctionArgs } from 'react-router';

import { serveStaticPage } from '../lib/static-page.server';

export async function loader(_args: LoaderFunctionArgs) {
  return serveStaticPage('how-it-works.html');
}
