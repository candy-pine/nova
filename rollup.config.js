import postcss from 'rollup-plugin-postcss';

export default {
  input: './src/candy-pine.scss',
  output: {
    file: './candy-pine.novaextension/Themes/Candy Pine.css',
  },
  watch: {
    chokidar: {
      usePolling: true,
    },
  },
  plugins: [
    postcss({
      extract: true,
    }),
  ],
};
