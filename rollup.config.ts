export default {
  input: 'src/index.js',
  output: {
    file: 'dist/ts-library-vite.js',
    format: 'umd',
    name: 'ts-library-vite',
    exports: 'named'
  }
};