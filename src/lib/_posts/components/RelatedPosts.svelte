<script lang="ts">
	import { onMount } from 'svelte';
	import { getPosts } from '../post.service';
	import type { TPost } from '../posts.types';

	import PostsList from './PostsList.svelte';

	export let post;

	let posts: TPost[] = [];

	onMount(async () => {
		const response = await getPosts();
		const filtered = response.data.filter((p) => p.slug !== post.slug);
		posts = filtered.slice(0, 4);
	});
</script>

<div class="related-posts container">
	<h2 class="related-posts-title">Posts Relacionados</h2>
	<PostsList {posts} />
</div>

<style lang="postcss">
	.related-posts-title {
		@apply font-bold leading-tight tracking-tighter;
		@apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl;
		@apply mb-8 md:mb-12 lg:mb-16;
	}
</style>
