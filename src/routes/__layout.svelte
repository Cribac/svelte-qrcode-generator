<script lang="ts">
	import '../styles/tailwind.css';
	import OffCanvasMenu from '$lib/components/navigation/OffCanvasMenu.svelte';
</script>

<header>
  <OffCanvasMenu />
</header>

<main class="mx-auto w-5/6 sm:w-4/5">
	<slot />
</main>
