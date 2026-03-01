import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import stylesheet from './styles/global.css?url';

export const meta = () => {
  return [
    { title: 'Data Wand | Remix App (Staging)' },
    { name: 'description', content: 'Remix staging app for Data Wand product hub.' }
  ];
};

export const links = () => {
  return [{ rel: 'stylesheet', href: stylesheet }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
