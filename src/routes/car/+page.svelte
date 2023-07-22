<script>
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<div class="hero h-[36em]">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-4xl tracking-wide font-bold">
				{#if ready}
					<h1 class="text-4xl tracking-wide font-bold">
						汽車筆試
						<span class="text-primary group-hover:text-primary-focus transition-colors">練習</span>
					</h1>
				{/if}
			</h1>
			<div class="h-64">a</div>
		</div>
	</div>
</div>
