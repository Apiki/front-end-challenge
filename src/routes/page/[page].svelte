<script lang="ts" context="module">
	import { getPosts } from '$lib/_posts/post.service';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ page }) => {
		const pageNumber = page.params?.page || 1;
		const posts = await getPosts(pageNumber);

		return { props: { posts, pageNumber } };
	};
</script>

<script lang="ts">
	import PostsList from '$lib/_posts/components/PostsList.svelte';

	export let posts;
	export let pageNumber;

	$: end = 10 * pageNumber;
	$: ini = 10 * (pageNumber - 1);

	$: prev = parseInt(pageNumber) - 1;
	$: next = parseInt(pageNumber) + 1;
</script>

<div class="index page container pb-0">
	<h1 class="page-title">Página <strong>{pageNumber}</strong></h1>
	<h2 class="page-descr">Mostrando {ini}-{end} de <strong>{posts.total} posts</strong></h2>

	<div class="page-listing">
		<PostsList bind:posts={posts.data} />
	</div>

	<div class="page-buttons">
		{#if prev}<a class="page-btn page-btn-prev" href={`/page/${prev}`}>Página anterior</a>{/if}
		{#if next < posts.totalpages}<a class="page-btn page-btn-prev" href={`/page/${next}`}>Proxima página</a>{/if}
	</div>
</div>
