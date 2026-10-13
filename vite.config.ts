import { fileURLToPath } from 'node:url';
import type { Plugin } from 'vite';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { REPO_NAME } from './src/config/site.ts';

/** KaTeX ships woff2, woff and ttf for every font. Browsers we support all take woff2, so drop the rest. */
function katexWoff2Only(): Plugin {
  const legacy = /,url\([^)]*\.woff\) format\("woff"\),url\([^)]*\.ttf\) format\("truetype"\)/g;
  return {
    name: 'katex-woff2-only',
    enforce: 'pre',
    transform(code, id) {
      if (!/katex[\\/]dist[\\/]katex(-swap)?\.min\.css/.test(id)) return null;
      return { code: code.replace(legacy, ''), map: null };
    },
  };
}

/** Preloads the fonts every page needs at first paint, so text is not held back by font discovery. */
function preloadFonts(): Plugin {
  const wanted =
    /(mitr-thai-(300|400)|inter-latin-wght|cormorant-garamond-latin-400)-normal.*\.woff2$|inter-latin-wght-normal.*\.woff2$/;
  return {
    name: 'preload-fonts',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        if (!ctx.bundle) return;
        return Object.keys(ctx.bundle)
          .filter((name) => wanted.test(name))
          .map((name) => ({
            tag: 'link',
            injectTo: 'head' as const,
            attrs: {
              rel: 'preload',
              as: 'font',
              type: 'font/woff2',
              crossorigin: '',
              href: `${ctx.server ? '/' : `/${REPO_NAME}/`}${name}`,
            },
          }));
      },
    },
  };
}

/** One id per build; the page carries it and `version.json` publishes it (see src/app/pwa/versionCheck.ts). */
const BUILD_ID = String(Date.now());

/** Publishes `version.json`, which pages compare with their own build id to find out they are old. */
function versionFile(): Plugin {
  return {
    name: 'version-file',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'version.json',
        source: JSON.stringify({ id: BUILD_ID }),
      });
    },
  };
}

export default defineConfig(({ command, isPreview }) => ({
  define: { __BUILD_ID__: JSON.stringify(BUILD_ID) },
  // GitHub Pages serves the site under /<repo name>/. The dev server uses the root;
  // preview mirrors production so the real base path can be tested locally.
  base: command === 'build' || isPreview ? `/${REPO_NAME}/` : '/',
  plugins: [
    katexWoff2Only(),
    preloadFonts(),
    versionFile(),
    react(),
    tailwindcss(),
    // Precaches the whole build so every page works offline. The app reloads itself
    // when a new version is found (see src/app/pwa/ToastHost.tsx).
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'Digital Logic Notes',
        short_name: 'Logic Notes',
        description: 'Midterm study notes for 1322201 Digital Logic Design.',
        lang: 'th',
        display: 'standalone',
        theme_color: '#faf9f5',
        background_color: '#faf9f5',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{html,js,css,woff2,svg,png,webmanifest}'],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}', 'tests/**/*.test.{ts,tsx}'],
  },
}));
