<script lang="ts">
  /**
   * The action (function) the button has to perform.
   *
   * @public
   */
    // eslint-disable-next-line @typescript-eslint/ban-types
  export let action: Function;

  /**
   * @public
   */
  export let buttonText:string;

  /**
   * Optional Tailwindcss classes for colors, etc.
   *
   * @public
   * @type {string}
   */
  export let colorStyles = 'bg-tundra hover:bg-greyish text-snow';
</script>

<button
  type="button"
  class="{colorStyles} font-bold py-2 px-4 rounded inline-flex w-full items-center"
  on:click={action()}
>
  <slot />
  {buttonText}
</button>
