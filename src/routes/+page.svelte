<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	enum TestMode {
		car,
		motorcycle,
		mechanical
	}
	let start = false;
</script>

<div class="hero h-[36em]">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-4xl tracking-wide font-bold">
				<h1 class="text-4xl tracking-wide font-bold">
					駕照筆試
					<span class="text-primary group-hover:text-primary-focus transition-colors">練習</span>
				</h1>
			</h1>
			<div class="h-64">
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
			</div>
		</div>
	</div>
</div>
