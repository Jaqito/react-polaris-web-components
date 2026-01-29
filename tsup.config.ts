import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: false, // TODO: polaris-types has complex types that can't be serialized
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom'],
});
