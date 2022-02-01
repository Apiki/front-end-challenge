<script lang="ts" context="module">
	import { getPosts } from '$lib/_posts/post.service';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async () => {
		const posts = await getPosts();
		return { props: { posts } };
	};
</script>

<script lang="ts">
	import PostsList from '$lib/_posts/components/PostsList.svelte';

	export let posts;

	let page = 1;

	const loadMore = async (e) => {
		e.preventDefault();
		page++;
		history.pushState({}, '', `/page/${page}`);
		const newPosts = await getPosts(page);
		posts.data = [...posts.data, ...newPosts.data];
	};
</script>

<div class="index page container">
	<h1 class="page-title">Últimas notícias em <strong>Desenvolvimento</strong></h1>

	<div class="page-listing">
		<PostsList bind:posts={posts.data} />
	</div>

	<div class="page-buttons">
		<button class="page-btn page-btn-prev" on:click={loadMore}>Carregar mais</button>
	</div>
</div>
