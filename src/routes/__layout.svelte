<script lang="ts">
	import OffCanvasMenu from '../components/OffCanvasMenu.svelte';
</script>

<header>
  <OffCanvasMenu />
</header>

<main>
	<slot />
</main>

<style>
  header {
		background: #247D9E;
	}
</style>
