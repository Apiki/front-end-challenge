<script lang="ts" context="module">
	export const load = async ({ status }) => ({ props: { status } });
</script>

<script lang="ts">
	export let status: string;
</script>

<div class="error page container">
	<h1 class="page-title">{status || '404'}</h1>
	<h2 class="page-descr">Não foi possível encontrar a página que está procurando.</h2>
	<h3 class="mt-4">Por favor tente recarregar a página ou entre em contato conosco.</h3>

	<a href="/">Voltar para home</a>
</div>

<style lang="postcss">
	.error {
		@apply text-center;
	}
	.error a {
		@apply block mt-8;
	}
	.error .page-title {
		@apply text-6xl sm:text-7xl lg:text-8xl xl:text-9xl;
	}
</style>
