import { getBank } from '$lib/questions.js';
import { error } from '@sveltejs/kit';

// TODO change to real counts
const quiz = [
	{ slug: 'car', name: '汽車', count: 40, passCount: 36, time: 50 },
	{ slug: 'motorcycle', name: '機車', count: 2, passCount: 1, time: 50 },
	{ slug: 'mechanical', name: '機械', count: 2, passCount: 1, time: 50 }
];

function randomSequence(len: number, total: number) {

	const numbers = Array.from({ length: total }, (_, i) => i);

	for (let i = numbers.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
	}

	return numbers.slice(0, len);
}

export async function load({ params }) {
	const mode = quiz.find((mode) => mode.slug === params.test);

	if (!mode) throw error(404);

	const data = await getBank("car","zh-TW")

	return {
		...mode,
		total: data.questions.length,
		sequence: randomSequence(40, 40)
	};
}
