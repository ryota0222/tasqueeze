import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import commonjs from 'vite-plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default defineConfig({
	plugins: [sveltekit(), commonjs(), nodePolyfills()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		commonjsOptions: {
			include: [/@repo\/ui/, /@repo\/proto/, /node_modules/]
		}
	}
	// ssr: {
	// 	noExternal: ['google-protobuf'] // Add google-protobuf to noExternal list
	// },
	// define: {
	// 	self: 'globalThis' // or use 'self': 'this'
	// }
});
