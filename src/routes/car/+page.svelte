<script>
	import CommonInnerLayout from '$lib/commonInnerLayout.svelte';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<CommonInnerLayout>
	<svelte:fragment slot="title">
		汽車筆試
		<span class="text-primary group-hover:text-primary-focus transition-colors">練習</span>
	</svelte:fragment>

	<div class="flex flex-col justify-center mt-6">
		<p>題目數量</p>
		<button class="btn btn-primary tracking-wider mt-4">開始練習</button>
	</div>
</CommonInnerLayout>
