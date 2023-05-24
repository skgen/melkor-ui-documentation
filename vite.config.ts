import { fileURLToPath, URL } from 'url';
import fs from 'node:fs';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import { exit } from 'process';
import { resolve } from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string; }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  if(!process.env.VITE_APP_PORT) {
    console.error('VITE_APP_PORT required.');
    exit(1);
  }

  const isDev = mode === 'development';

  const port = parseInt(process.env.VITE_APP_PORT, 10);

  const libraryPath = isDev ? process.env.VITE_APP_MELKOR_ROOT_PATH as string : './node_modules/@patriarche/melkor';
  const packageJson = JSON.parse(fs.readFileSync(resolve(libraryPath, 'package.json'), { encoding: 'utf-8' }));

  const libraryAlias = isDev ? [
    {
      find: /@patriarche\/melkor\/style\//,
      replacement: `${resolve(libraryPath, './dist/scss')}/`,
    },
    {
      find: /@patriarche\/melkor\/style/,
      replacement: resolve(libraryPath, './dist/style.css', ),
    },
    {
      find: /@patriarche\/melkor/,
      replacement: resolve(libraryPath, './dist/index.mjs'),
    },
  ] : [];

  return defineConfig({
    server: {
      port,
      https: true,
    },
    preview: {
      port,
    },
    build: {
      rollupOptions: {
        output: [
          {
            assetFileNames: "assets/[name]-[hash][extname]",
          },
        ],
      },
    },
    plugins: [
      vue(), 
      vueJsx(), 
      svgLoader(), 
      vueI18n({
        include: fileURLToPath(new URL('./i18n/**', import.meta.url)),
        globalSFCScope: true,
      }),
      basicSsl(),
    ],
    resolve: {
      dedupe: ['vue'],
      alias: [
        {
          find: /~(.+)/,
          replacement: fileURLToPath(new URL('./node_modules/$i', import.meta.url)),
        },
        {
          find: /@\//,
          replacement: fileURLToPath(new URL('./src/', import.meta.url)),
        },
        {
          find: /@style\//,
          replacement: fileURLToPath(new URL('./src/assets/scss/', import.meta.url)),
        },
        ...libraryAlias,
      ],
    },
    define: {
      __APP__: {
        version: packageJson.version
      },
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
  });
}