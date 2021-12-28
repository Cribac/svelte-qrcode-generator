<script lang="ts" type="module">
	import { page } from "$app/stores";

	export let route;

	$: isActive = (route.path===$page.path);
</script>

{#if isActive}
	<li class="px-2 py-3 bg-snow">
		<a class="p-1 text-base cursor-default text-midnight" href="{route.path}">{route.text}</a>
	</li>
{:else}
	<li class="px-2 py-3 hover:bg-snow">
		<a class="p-1 text-base text-white hover:text-midnight" href="{route.path}">{route.text}</a>
	</li>
{/if}
