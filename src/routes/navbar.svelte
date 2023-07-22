<script lang="ts">
	import { Menu } from 'lucide-svelte';

	const links = [
		{ title: '汽車測驗', slug: 'car', disabled: false },
		{ title: '機車測驗', slug: 'motorcycle', disabled: true },
		{ title: '機械測驗', slug: 'mechanical', disabled: true }
	];
</script>

<div class="flex py-4 px-4 lg:px-0">
	<a href="/" class="btn btn-ghost group flex items-center gap-2 text-2xl font-semibold">
		駕照筆試
		<span class="text-primary group-hover:text-primary-focus transition-colors">練習</span>
	</a>
	<div class="grow" />
	<nav class="items-end row gap-2 hidden sm:flex">
		{#each links as link (link.slug)}
			<a href="/{link.slug}" aria-disabled={link.disabled} class="btn btn-ghost text-lg">
				{link.title}
			</a>
		{/each}
	</nav>
	<div class="flex sm:hidden dropdown dropdown-bottom dropdown-end items-baseline">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<!-- svelte-ignore a11y-positive-tabindex -->
		<label for="nav" tabindex="1" class="btn btn-ghost m-1"><Menu /></label>
		<!-- svelte-ignore a11y-positive-tabindex -->
		<ul
			role="menu"
			tabindex="1"
			class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
		>
			{#each links as link (link.slug)}
				<li role="menuitem">
					<a href="/{link.slug}" aria-disabled={link.disabled} class="text-base-content text-xl">
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
