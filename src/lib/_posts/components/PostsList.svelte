<script lang="ts">
	import { fly } from 'svelte/transition';

	import type { TPost } from '../posts.types';
	import PostsListItem from './PostsListItem.svelte';
	export let posts: TPost[];
</script>

<ul class="posts-list">
	{#each posts as post, index}
		<li transition:fly|local={{ duration: 300, delay: 300 * index, y: 300 }}><PostsListItem {post} /></li>
	{/each}
</ul>

<style lang="postcss">
	.posts-list {
		@apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
		@apply gap-6 lg:gap-8 xl:gap-10;
	}
</style>
