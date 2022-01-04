<script lang="ts">
	export let route;
	export let isActive = false;
</script>

{#if isActive}
	<a class="p-1 text-base cursor-default text-midnight" href="{route.path}">{route.text}</a>
{:else}
	<a class="p-1 text-base text-white group-hover:text-midnight" href="{route.path}">{route.text}</a>
{/if}
