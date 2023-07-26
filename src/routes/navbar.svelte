<script lang="ts">
	import { Menu } from 'lucide-svelte';

	const links = [
		{ title: '汽車測驗', slug: 'car', disabled: false },
		{ title: '機車測驗', slug: 'motorcycle', disabled: true },
		{ title: '機械測驗', slug: 'mechanical', disabled: true }
	];
</script>

<div class="flex px-4 py-4 lg:px-0">
	<a href="/" class="group btn btn-ghost flex items-center gap-2 text-2xl font-semibold">
		駕照筆試
		<span class="text-primary transition-colors group-hover:text-primary-focus">練習</span>
	</a>
	<div class="grow" />
	<nav class="row hidden items-end gap-2 sm:flex">
		{#each links as link (link.slug)}
			<a href="/{link.slug}" aria-disabled={link.disabled} class="btn btn-ghost text-lg">
				{link.title}
			</a>
		{/each}
	</nav>
	<div class="dropdown dropdown-end dropdown-bottom flex items-baseline sm:hidden">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<!-- svelte-ignore a11y-positive-tabindex -->
		<label for="nav" tabindex="1" class="btn btn-ghost m-1"><Menu /></label>
		<!-- svelte-ignore a11y-positive-tabindex -->
		<ul
			role="menu"
			tabindex="1"
			class="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
		>
			{#each links as link (link.slug)}
				<li role="menuitem">
					<a href="/{link.slug}" aria-disabled={link.disabled} class="text-xl text-base-content">
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
