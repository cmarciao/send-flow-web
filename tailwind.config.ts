import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#FFDE07'
			},
			backgroundColor: {
				'gray-900': '#151515'
			},
			transitionProperty: {
				'hover': '.2s all'
			},
			maxWidth: {
				'screen-sm': '380px',
				'screen-md': '520px'
			},
		},
	},
	plugins: [],
};
export default config;
