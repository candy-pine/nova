import postcss from 'rollup-plugin-postcss'

export default {
	input: './src/candy-pine.css',
	output: {
		file: './candy-pine.novaextension/Themes/candy-pine.css',
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
}