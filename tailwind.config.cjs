/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');

// wrap your config with konstaConfig
module.exports = konstaConfig({
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
});
