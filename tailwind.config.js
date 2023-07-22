/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {},
	plugins: [daisyui],
	daisyui: {
		themes: ['cupcake']
	}
};
