<script lang="ts">
	import type { TPost } from '../posts.types';

	export let post: TPost;
</script>

<a class="posts-list-item" href={`/${post.slug}`}>
	<div class="post-image" style={`background-image: url(${post.images.medium.source_url})`} />
	<div class="post-infos">
		<h2>{@html post.title}</h2>
		<time datetime={post.datetime}>{post.date}</time>
	</div>
</a>

<style lang="postcss">
	.posts-list-item {
		@apply bg-white block h-full no-underline overflow-hidden rounded-xl shadow-md;
		@apply text-stone-700 hover:text-pink-800;
		@apply hover:scale-105 transition-all;
	}

	.post-image {
		@apply aspect-video bg-stone-900 bg-no-repeat bg-cover w-full;
	}

	.post-infos {
		@apply gap-4 p-4 xl:p-5;
		@apply flex flex-col items-stretch justify-between;
	}
	.post-infos h2 {
		@apply flex-auto font-semibold text-lg md:text-2xl leading-none;
	}
	.post-infos time {
		@apply mt-auto text-stone-500 text-sm;
	}
</style>
