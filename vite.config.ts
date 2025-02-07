/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import external from 'vite-plugin-external';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      external({
        development: {
          externals: {
            react: 'window.React',
          },
        },
      }),
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
          globals: {
            react: 'React',
            '@alifd/next': 'Next',
            '@felce/lowcode-engine': 'AliLowCodeEngine',
            lodash: '_',
            moment: 'moment',
            'prop-types': 'PropTypes',
          },
        },
        external: [
          'react',
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
