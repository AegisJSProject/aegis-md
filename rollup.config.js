import nodeResolve from '@rollup/plugin-node-resolve';

const externalPackages = ['@aegisjsproject/', 'highlight.js', 'marked', 'marked-highlight'];

export default {
	input: 'aegis-md.js',
	output: {
		file: 'aegis-md.cjs',
		format: 'cjs',
	},
	plugins: [nodeResolve()],
	external: id => externalPackages.some(pkg => id.startsWith(pkg)),
};

