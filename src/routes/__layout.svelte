<script lang="ts">
	import '../styles/tailwind.css';
	import OffCanvasMenu from '$lib/components/navigation/OffCanvasMenu.svelte';
  import { page } from '$app/stores';
  import { routes } from './routes';

  /**
   * @type {Route}
   */
  $: title = routes.find(t => t.path === $page.url.pathname);
</script>

<svelte:head>
  <title>QRCode Generator | {title.text}</title>
</svelte:head>

<header>
  <OffCanvasMenu />
</header>

<main class="mx-auto w-5/6 sm:w-4/5">
	<slot />
</main>
