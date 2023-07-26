<script lang="ts">
	import CommonInnerLayout from '$lib/commonInnerLayout.svelte';
	import { slide } from 'svelte/transition';
	let start = false;
</script>

<CommonInnerLayout>
	<svelte:fragment slot="title">
		<h1 class="text-4xl font-bold tracking-wide">
			駕照筆試
			<span class="text-primary transition-colors group-hover:text-primary-focus">練習</span>
		</h1>
	</svelte:fragment>

	{#if !start}
		<p class="py-6">
			<span class="">專為準備駕駛筆試的學習者而設計的資源平台</span><br />
			<span class="">線上測驗對駕照考試的熟悉度</span><br />
			<button class="btn btn-primary mt-4 tracking-wider" on:click={() => (start = true)}
				>開始練習</button
			>
		</p>
	{:else}
		<p class="py-6" transition:slide>選擇測驗科目</p>
		<div class="flex flex-col gap-2">
			<a href="/car" class="btn btn-primary tracking-wide" data-sveltekit-preload-code>汽車題庫</a>
			<a href="/motorcycle" class="btn btn-secondary tracking-wide" data-sveltekit-preload-code
				>機車題庫</a
			>
			<a href="/mechanical" class="btn btn-success tracking-wide" data-sveltekit-preload-code
				>機械題庫</a
			>
		</div>
	{/if}
</CommonInnerLayout>
