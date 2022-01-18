<script lang="ts" context="module">
	import { getPostBySlug } from '$lib/_posts/post.service';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ page }) => {
		try {
			const slug = page.params?.slug;
			const post = await getPostBySlug(slug);
			return { props: { post: post.data } };
		} catch (err) {
			console.error('Error!', err.message);
			return { status: 301, redirect: '/404' };
		}
	};
</script>

<script lang="ts">
	import Post from '$lib/_posts/components/Post.svelte';
	import RelatedPosts from '$lib/_posts/components/RelatedPosts.svelte';
	export let post;
</script>

<Post {post} />

<div class="related bg-stone-300">
	<RelatedPosts {post} />
</div>
