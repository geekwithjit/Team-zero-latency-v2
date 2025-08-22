import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				smartlight: {
					primary: '#ef4444',
					secondary: '#f97316',
					accent: '#22c55e',
					neutral: '#1f2937',
					'base-100': '#fff7ed',
					info: '#38bdf8',
					success: '#10b981',
					warning: '#f59e0b',
					error: '#dc2626'
				}
			},
			{
				smartdark: {
					primary: '#ef4444',
					secondary: '#fb923c',
					accent: '#22c55e',
					neutral: '#0b1220',
					'base-100': '#0f172a',
					info: '#38bdf8',
					success: '#10b981',
					warning: '#f59e0b',
					error: '#f87171'
				}
			}
		]
	}
};