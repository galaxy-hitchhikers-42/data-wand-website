import { readFile } from 'node:fs/promises';
import path from 'node:path';

function pagePath(relativePath: string) {
  return path.join(process.cwd(), 'static-pages', relativePath);
}

export async function serveStaticPage(relativePath: string) {
  try {
    const html = await readFile(pagePath(relativePath), 'utf8');
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate'
      }
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Response('Not Found', { status: 404 });
    }
    throw error;
  }
}
