<script>
	import { load } from '$routes/__error.svelte';
</script>

<nav class="navbar">
	<a href="/"><img src="/favicon-apiki.webp" alt="Apiki" loading="eager" decoding="async" /></a>
</nav>

<div class="navbar-holder" />

<style lang="postcss">
	.navbar {
		@apply bg-white h-16 fixed inset-x-0 top-0 z-50;
		@apply flex flex-row items-center gap-4 justify-center;
		@apply px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20;
	}
	.navbar a img {
		@apply h-10;
	}

	.navbar-holder {
		@apply h-16;
	}
</style>
