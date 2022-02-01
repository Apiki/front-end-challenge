<footer class="footer container">
	<a href="#top">Voltar ao topo</a>

	<hr />

	<p>Feito com <span aria-label="amor">❤️</span> por William Daflita.</p>
</footer>

<style lang="postcss">
	.footer {
		@apply flex flex-col;
		@apply gap-4 md:gap-6 lg:gap-8 xl:gap-10;
	}
	.footer a {
		@apply font-semibold no-underline text-sm uppercase;
		@apply text-stone-500 dark:text-stone-600;
	}
	.footer p {
		@apply font-normal;
		@apply text-stone-500 dark:text-stone-600;
	}

	.footer hr {
		@apply border-0 border-t-2 border-stone-300 dark:border-stone-700;
		/* @apply m-0 sm:-mt-4 md:-mt-6 lg:-mt-8 xl:-mt-10; */
	}
</style>
