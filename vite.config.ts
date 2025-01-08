/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({
        tsDecorators: true,
      }),
      dts({
        entryRoot: 'src/',
      }),
    ],
    define: {
      'process.env': {
        NODE_ENV: mode,
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'vitest.setup.ts',
    },
    server: {
      port: 4008,
    },
    build: {
      lib: {
        entry: './src/index.ts',
        fileName: (format: string) => `engine-ext.${format}.js`,
        name: '___AliLowCodeEngineExt___',
        cssFileName: 'engine-ext',
      },
      rollupOptions: {
        output: {
          exports: 'named',
        },
        external: [
          'react',
          'react-dom',
          'prop-types',
          'moment',
          'lodash',
          '@alifd/next',
          '@felce/lowcode-engine',
          '@felce/lowcode-editor-core',
          '@felce/lowcode-editor-skeleton',
          '@felce/lowcode-designer',
          '@felce/lowcode-utils',
          '@felce/lowcode-types',
          '@felce/lowcode-plugin-base-monaco-editor',
        ],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions
          api: 'legacy',
        },
      },
    },
  };
});
