<script>
	import '../app.css';
	import Navbar from './navbar.svelte';

	const footerLinks = [
		{ name: '版權聲明', slug: '/license', disabled: false },
		{ name: '題庫來源', slug: 'https://www.thb.gov.tw/cl.aspx?n=12', disabled: false },
		{ name: '免責聲明', slug: '', disabled: false }
	];
</script>

<div class="flex grow">
	<div class="grow" />
	<div class="w-[100%] lg:w-[70%]">
		<Navbar />
		<slot />
	</div>
	<div class="grow" />
</div>
<footer class="footer footer-center p-2 text-base-content">
	<div>
		<p class="p-3">
			Made with love and ☕ by <a
				href="https://thect.cc"
				class="link-primary link underline-offset-4">Chen</a
			><br />
			<span class="flex justify-center gap-4 pt-1">
				{#each footerLinks as link}
					<a href={link.slug} class="link-primary link underline-offset-4">{link.name}</a>
				{/each}
			</span>
		</p>
	</div>
</footer>
