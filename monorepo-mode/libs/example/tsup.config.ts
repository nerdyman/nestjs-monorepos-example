import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs'],
  minify: !options.watch,
  target: 'es2017',
  sourcemap: true,
  splitting: true,
  treeshake: true,
}));
