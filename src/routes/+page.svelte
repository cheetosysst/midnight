<script lang="ts">
	import CommonInnerLayout from '$lib/commonInnerLayout.svelte';
	import { slide } from 'svelte/transition';
	let start = false;
</script>

<CommonInnerLayout>
	<svelte:fragment slot="title">
		駕照筆試
		<span class="text-primary group-hover:text-primary-focus transition-colors">練習</span>
	</svelte:fragment>

	{#if !start}
		<p class="py-6">
			<span class="">專為準備駕駛筆試的學習者而設計的資源平台</span><br />
			<span class="">線上測驗對駕照考試的熟悉度</span><br />
			<button class="btn btn-primary tracking-wider mt-4" on:click={() => (start = true)}
				>開始練習</button
			>
		</p>
	{:else}
		<p class="py-6" transition:slide>123</p>
		<div class="flex gap-2 flex-col">
			<a href="/car" class="btn btn-primary tracking-wide">汽車題庫</a>
			<a href="/motorcycle" class="btn btn-secondary tracking-wide">機車題庫</a>
			<a href="/mechanical" class="btn btn-success tracking-wide">機械題庫</a>
		</div>
	{/if}
</CommonInnerLayout>
