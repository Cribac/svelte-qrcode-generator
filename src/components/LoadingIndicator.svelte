<script>
  /**
   * Width of the indicator.
   *
   * @public
   * @type {string}
   */
  export let width = '32';

  /**
   * Color of the indicator.
   *
   * @public
   * @type {string}
   */
  export let color = '#D49C6B';

  /**
   * Optional text to be shown in the indicator.
   * @type {string}
   */
  export let text = '';

</script>

<div class="loading-indicator">
  {#if text}
    <div class="loading-text">{text}</div>
  {/if}
  <svg viewBox="25 25 50 50" width={width}>
    <circle cx="50" cy="50" r="20" stroke={color}></circle>
  </svg>
</div>

<style>
  .loading-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .loading-text {
    margin: 0 0 1em 0;
  }

  svg {
    transform-origin: center;
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -125px;
    }
  }
</style>
