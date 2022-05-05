import type { BuildConfig } from 'unbuild';

const config: BuildConfig = {
  entries: ['./src/index'],
  declaration: true,
  rollup: {
    emitCJS: true,
    esbuild: { target: 'es6' },
  },
};

export default config;
