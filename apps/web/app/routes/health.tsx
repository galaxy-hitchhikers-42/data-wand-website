import type { LoaderFunctionArgs } from 'react-router';

export async function loader(_args: LoaderFunctionArgs) {
  return Response.json(
    { ok: true, service: 'data-wand-web', runtime: 'react-router' },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        Pragma: 'no-cache'
      }
    }
  );
}
