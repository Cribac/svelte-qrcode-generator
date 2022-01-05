<script lang="ts">
  /**
   * The alert type.
   * Supported are "error", "warning", "info".
   *
   * @public
   */
  export let alertType:string;

  /**
   * The message to display.
   *
   * @public
   */
  export let message:string;

  /**
   * Map labels to the error types.
   *
   * @private
   */
    // eslint-disable-next-line no-undef
  const supportedTypesMap:SupportedTypesMap = {
    error: {
      label: 'Error!',
      class: 'bg-error-background border-error-border',
    },
    warning: {
      label: 'Warning!',
      class: 'bg-warning-background border-warning-border',
    },
    info: {
      label: 'Info!',
      class: 'bg-info-background border-info-border',
    },
  };

  /**
   * Get the label of the error type.
   *
   * @private
   */
  function getTypeLabel(type:string):string {
    return supportedTypesMap[type.toString()].label;
  }

  /**
   * Get the tailwindcss class of the error type.
   *
   * @private
   */
  function getTypeClass(type:string):string {
    return supportedTypesMap[type.toString()].class;
  }
</script>

<div class="{getTypeClass(alertType)} border-l-4 text-midnight p-4" role="alert">
  <p class="font-bold">{getTypeLabel(alertType)}</p>
  <p>{message}</p>
</div>
