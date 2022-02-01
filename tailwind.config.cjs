const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	// add this section
	mode: 'jit',
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
