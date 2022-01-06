<script lang="ts">
  export let data:string;

  export let buttonText:string;

  export let fileName:string;

  /**
   * Optional Tailwindcss classes for colors, etc.
   *
   * @public
   * @type {string}
   */
  export let colorStyles = 'bg-tundra hover:bg-greyish text-snow';
</script>

<a
  role="button"
  href={data}
  class="{colorStyles} font-bold py-2 px-4 rounded inline-flex items-center"
  download={fileName}>
  <slot />
  {buttonText}
</a>
