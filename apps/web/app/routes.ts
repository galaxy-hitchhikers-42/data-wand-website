import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/_index.ts'),
  route('about', 'routes/about.ts'),
  route('how-it-works', 'routes/how-it-works.ts'),
  route('pricing', 'routes/pricing.ts'),
  route('download', 'routes/download.tsx'),
  route('use-cases/:slug', 'routes/use-cases.$slug.ts'),
  route('robots.txt', 'routes/robots-txt.ts'),
  route('health', 'routes/health.tsx'),
  route('login', 'routes/login.tsx'),
  route('signup', 'routes/signup.tsx'),
  route('dashboard', 'routes/dashboard.tsx'),
  route('dashboard/usage', 'routes/dashboard.usage.tsx'),
  route('dashboard/billing', 'routes/dashboard.billing.tsx'),
  route('dashboard/settings', 'routes/dashboard.settings.tsx')
] satisfies RouteConfig;
