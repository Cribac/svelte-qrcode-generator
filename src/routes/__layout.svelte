<script lang="ts">
	import '../styles/tailwind.css';
	import OffCanvasMenu from '../components/OffCanvasMenu.svelte';
</script>

<header>
  <OffCanvasMenu />
</header>

<main>
	<slot />
</main>
