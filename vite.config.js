// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	// plugins: [react()],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{
				find: '@pages',
				replacement: path.resolve(__dirname, 'src/pages'),
			},
		],
	},
});
