<script lang="ts">
	import { beforeUpdate, getContext, onMount, setContext } from 'svelte';
	import { Timer, PenLine } from 'lucide-svelte';
	import CommonInnerLayout from '$lib/commonInnerLayout.svelte';
	import Question from './question.svelte';
	import type { Question as QuestionType } from '$lib/types.js';
	import type { Answer } from '$lib/types.js';
	import { question } from './store';
	import { goto } from '$app/navigation';

	export let data;

	let started = false;
	let start = new Date();
	let answers: Answer[] = [];

	onMount(async () => {
		question.set(await getQuestion(data.sequence[0]));
	});

	beforeUpdate(() => {
		console.log(answers);
		if (getContext('testMode') !== data.slug) {
			setContext('testMode', data.slug);
			started = false;
		}
	});

	async function testStart(timestamp: Date) {
		started = true;
		start = timestamp;
	}

	function appendAnswer(id: number, selection: number) {
		answers.push({
			id: id,
			selection: selection
		});
	}

	async function nextQuestion(len: number) {
		if (len >= data.count) {
			submit(answers);
			return;
		}
		question.set(await getQuestion(data.sequence[len]));
		console.log('new question', question);
	}

	async function getQuestion(id: number) {
		const response = await fetch(`/api/${data.slug}/zh-TW/${id}`);
		const { question } = await response.json();
		return question;
	}

	async function submit(answers: Answer[]) {
		const response = await fetch(`/${data.slug}`, {
			method: 'POST',
			body: JSON.stringify({ answers }),
			headers: { 'Content-Type': 'application/json' }
		});
		console.log(await response.json());
		goto(`/`, {
			replaceState: true
		});
	}
</script>

<CommonInnerLayout>
	<svelte:fragment slot="title">
		<h1 class="{started ? 'text-2xl' : 'text-4xl'} font-bold tracking-wide transition-all">
			{data.name}筆試
			<span class="text-primary transition-colors group-hover:text-primary-focus">練習</span>
		</h1>
	</svelte:fragment>
	<div class="flex flex-col justify-center gap-2 p-6">
		{#if !started}
			<p class="flex w-full justify-center text-xl">
				<PenLine class="mr-4" />題目數量：
				<span class="mr-2 inline-block w-6 text-primary-focus">{data.count}</span> 題
			</p>
			<p class="flex justify-center text-xl">
				<Timer class="mr-4" />
				考試時間：
				<span class="mr-2 w-6 text-primary-focus">{data.time}</span> 分
			</p>
			<button class="btn btn-primary mt-4 tracking-wider" on:click={() => testStart(new Date())}
				>開始練習</button
			>
		{:else}
			<Question
				question={$question}
				on:submitAnswer={(ans) => {
					appendAnswer(data.sequence[answers.length], ans.detail.selection);
					nextQuestion(answers.length);
				}}
			/>
		{/if}
	</div>
</CommonInnerLayout>
