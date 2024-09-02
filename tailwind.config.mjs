/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow:{
				'profile-picture': '19px 19px 30px #1818182d, -19px -19px 30px #2020201f'
			},
			animation:{
				'float': 'float 2s ease-in-out infinite',
			},
			keyframes:{
				'float': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' },
					'100%': { transform: 'translateY(0)' },
				}
			}
		},
	},
	plugins: [],
}
