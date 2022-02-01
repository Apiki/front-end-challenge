<script lang="ts">
	import { page } from '$app/stores';

	import Footer from '$components/Footer.svelte';
	import Navbar from '$components/Navbar.svelte';

	import '$styles/global.css';
</script>

<div class={`layout ${$page.url.pathname}`}>
	<a class="sr-only focus:not-sr-only" id="top" href="#skip">Skip to content</a>

	<Navbar />
	<main class="layout-main" id="skip"><slot /></main>
	<Footer />
</div>
