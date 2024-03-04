/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"ctp-mantle": "#303446",
				"ctp-crust": "#232634",
				"ctp-text": "#c6d0f5",
				"ctp-surface": "#51576d",
				"ctp-peach": "#ef9f76"
			}
		},
	},
	plugins: [],
}
