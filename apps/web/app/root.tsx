import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import stylesheet from './styles/global.css?url';

export const meta = () => {
  return [
    { title: 'Data Wand — Stop Typing. Start Snapping.' },
    {
      name: 'description',
      content:
        'Take a photo of any paper form with your iPhone. Data Wand reads it and fills in your computer automatically. Private by default with optional AI-assisted recognition. Free to start.'
    }
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
