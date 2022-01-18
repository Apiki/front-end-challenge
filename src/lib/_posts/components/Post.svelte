<script lang="ts">
	import type { TPost } from '../posts.types';

	export let post: TPost;
</script>

<article class="post container">
	<header class="post-header">
		<h1 class="post-title">{@html post.title}</h1>
		<h2 class="post-descr">{@html post.excerpt}</h2>

		<div class="post-infos">
			{#if post.author.name}
				Publicado por <a href="/author/{post.author.slug}">{post.author.name}</a>
			{/if}
			em <time datetime={post.datetime}>{post.date}</time>
		</div>
	</header>

	<div class="post-image-holder">
		<div class="post-image" style={`background-image: url(${post.images.large.source_url})`} />
	</div>

	<div class="post-content">{@html post.content}</div>
</article>

<style lang="postcss">
	.post {
		@apply flex flex-col;
		@apply gap-4 md:gap-6 lg:gap-8 xl:gap-10;
	}

	.post-image {
		background: no-repeat;
		@apply bg-stone-900 bg-cover absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen;
	}
	.post-image-holder {
		height: 60vh;
		@apply relative;
	}

	.post-title {
		@apply font-bold leading-tight tracking-tighter;
		@apply text-3xl md:text-4xl lg:text-5xl;
	}
	.post-descr {
		margin-top: 0.5em;
		@apply font-semibold leading-tight tracking-tighter;
		@apply text-xl md:text-2xl lg:text-3xl;
	}
	.post-infos {
		@apply text-stone-400;
		@apply mt-2 md:mt-3 lg:mt-4 xl:mt-5 text-sm;
	}
	.post-infos:first-letter {
		text-transform: uppercase;
	}

	.post-header,
	.post-content {
		max-width: 80ch;
		@apply mx-auto;
	}

	.post-content {
		@apply lg:text-lg;
	}
</style>
