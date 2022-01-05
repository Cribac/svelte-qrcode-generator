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
  on:click={action}
>
  {buttonText}
</button>
