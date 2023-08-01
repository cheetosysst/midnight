<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { Circle, X } from 'lucide-svelte';
	import type { Question } from '$lib/types';

	export let question: Question;

	onMount(() => {
		console.log('inner', question);
	});

	$: console.log(question);

	const submitAnswer = createEventDispatcher();
	function submit(selection: number) {
		submitAnswer('submitAnswer', { selection });
	}

	const buttonStyles = [
		'bg-primary hover:bg-primary-focus',
		'bg-secondary hover:bg-secondary-focus',
		'bg-accent hover:bg-accent-focus',
		'bg-info hover:bg-sky-500'
	];
</script>

<p class="mb-4 text-center">{question.question}</p>
{#if question && question.type === 'truefalse'}
	<p class="flex flex-row justify-center gap-4">
		<button class="btn btn-success" on:click={() => submit(1)}><Circle /></button>
		<button class="btn btn-error" on:click={() => submit(0)}><X /></button>
	</p>
{:else if question !== undefined}
	<p class="flex flex-col gap-4">
		{#each question.options as option, index}
			<button
				class="hover card p-4 px-8 {buttonStyles[
					index
				]} btn-block mx-auto font-normal transition-all"
				on:click={() => submit(index)}>{option}</button
			>
		{/each}
	</p>
{/if}
