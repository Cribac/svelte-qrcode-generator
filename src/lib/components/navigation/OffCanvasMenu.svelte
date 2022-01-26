<script lang="ts">
	import OffCanvasMenuItem from '$lib/components/navigation/OffCanvasMenuItem.svelte';
	import { routes } from '../../../routes/routes';
	import { page } from '$app/stores';

	/**
	 * Flag to determine if the menu is toggled or not.
	 *
	 * @type {!boolean}
	 */
	let toggled = false;

	/**
	 * Reactive property to check if menu items are active.
	 */
	// eslint-disable-next-line no-undef
	$: isActive = (route: Route): boolean => (route.path===$page.url.pathname);

	/**
	 * Function to set the toggled state.
	 *
	 * @param route {Route}
	 */
	// eslint-disable-next-line no-undef
	function handleToggled(route: Route): void {
		toggled = (route.path===$page.url.pathname);
	}
</script>

<aside class="bg-tundra">
	<input type="checkbox" id="menu-toggle" bind:checked={toggled}>
	<label class="btn flex items-center text-white" for="menu-toggle" data-testid="sidebar">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
		<span>Menu</span>
	</label>
	<div class="sidebar bg-midnight fixed">
		<ul>
			{#each routes as route}
				{#if isActive(route)}
					<li class="px-2 py-3 bg-snow">
						<OffCanvasMenuItem {route} isActive={true} />
					</li>
				{:else}
					<li
						class="px-2 py-3 hover:bg-snow hover:border-y first:hover:border-none hover:border-solid hover:border-midnight group"
						on:click={() => handleToggled(route)}
					>
						<OffCanvasMenuItem {route} />
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</aside>

<style>
  #menu-toggle,
  .btn span {
    display: none;
  }

  .btn {
    display: block;
    width: 55px;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    cursor: pointer;
    transition: width .3s ease-in-out;
  }

  .sidebar {
    width: 230px;
    height: 100%;
    z-index: 1111;
    transition: transform .3s ease-in-out;
    transform: translateX(-230px);
  }

  #menu-toggle:checked ~ .sidebar {
    transform: translateX(0);
  }

  #menu-toggle:checked + .btn {
    width: 230px;
    padding: 0 20px;
  }

  #menu-toggle:checked + .btn span {
    display: inline;
  }
</style>
