import path from 'path';
import { createRequire } from 'module';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { PRERENDER_ROUTES } from './seo/routeSeo';

const require = createRequire(import.meta.url);
const vitePrerender = require('vite-plugin-prerender');

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const windowsChromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const platformDefaultExecutablePath = process.platform === 'win32' ? windowsChromePath : undefined;
  const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || platformDefaultExecutablePath;
  const isVercelBuild = process.env.VERCEL === '1';
  const runPrerenderOnVercel = process.env.PRERENDER_ON_VERCEL === 'true';
  const shouldRunPrerender = mode === 'production' && (!isVercelBuild || runPrerenderOnVercel);

  const plugins = [react()];

  if (shouldRunPrerender) {
    plugins.push(
      vitePrerender({
        staticDir: path.join(__dirname, 'dist'),
        routes: PRERENDER_ROUTES,
        renderer: new vitePrerender.PuppeteerRenderer({
          renderAfterTime: 1200,
          maxConcurrentRoutes: 1,
          headless: true,
          ...(executablePath ? { executablePath } : {}),
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        }),
      }),
    );
  }

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins,
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
