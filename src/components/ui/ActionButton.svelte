<script>
  /**
   * The action (function) the button has to perform.
   *
   * @public
   * @type {!function}
   */
  export let action;

  /**
   * @public
   * @type {!string}
   */
  export let buttonText;
</script>

<button
  type="button"
  class="bg-tundra hover:bg-greyish text-snow font-bold py-2 px-4 rounded inline-flex items-center"
  on:click={action}
>
  <slot></slot>
  {buttonText}
</button>
