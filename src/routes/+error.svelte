<script>
	import { page } from '$app/stores';
	import CommonInnerLayout from '$lib/commonInnerLayout.svelte';
</script>

<CommonInnerLayout>
	<h1 slot="title">{$page.status}</h1>
	<p class="text-lg flex flex-col gap-4 mt-4">
		{$page.status === 404 ? '頁面不存在' : '頁面發生錯誤'}
		<a class="btn btn-primary tracking-wider" href="/">回到首頁</a>
	</p>
</CommonInnerLayout>
