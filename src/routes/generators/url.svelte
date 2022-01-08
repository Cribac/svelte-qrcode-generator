<script lang="ts">
  import LoadingIndicator from '../../components/LoadingIndicator.svelte';
  import Alert from '../../components/Alert.svelte';
  import ActionButton from '../../components/ui/ActionButton.svelte';
  import DownloadButton from '../../components/ui/DownloadButton.svelte';
  import Validator from 'validator';
  import QRCode from 'qrcode';

  /**
   * Options to pass into the validator's isURL method.
   */
    // eslint-disable-next-line no-undef
  const urlValidatorOptions: UrlValidatorOptions = {
    protocols: ['http', 'https'],
    require_protocol: true,
    require_valid_protocol: true,
  };

  /**
   * The url entered into the input field by the user.
   *
   * @type {string}
   */
  let url = '';

  /**
   * The generated, encoded data url string.
   *
   * @type {string}
   */
  let encodedUrl = '';

  /**
   * Flag to track error messages.
   *
   * @type {string}
   */
  let error = '';

  /**
   * Flag to track if something is loading.
   *
   * @type {boolean}
   */
  let loading = false;

  /**
   * Reactive flag to check if the url is valid.
   *
   * @type {boolean}
   */
  $: isValidUrl = Validator.isURL(url, urlValidatorOptions);

  /**
   * Reactive flag to display a warning if currently entered text is invalid.
   *
   * @type {boolean}
   */
  $: invalidInput = !isValidUrl && url?.length > 0

  /**
   * Reset all textual data.
   */
  function resetInputs(): void {
    url = '';
    encodedUrl = '';
    error = '';
  }

  async function generateQrCode(text: string): Promise<void> {
    loading = true;
    try {
      resetInputs();
      encodedUrl = await QRCode.toDataURL(text);
      if (encodedUrl) {
        loading = false;
      }
    } catch (err) {
      loading = false;
      error = err.message;
    }
  }
</script>

<p>URL</p>
<div class="flex flex-col">
  <label for="input-url">
    Please enter your url
  </label>
  <input
    id="input-url"
    type="text"
    class="flex-grow p-2"
    placeholder="http://www.example.com"
    bind:value={url}
  />
</div>

{#if isValidUrl}
  <div class="mt-4">
    <ActionButton action={() => generateQrCode(url)} buttonText="Generate QRCode">
      <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
      </svg>
    </ActionButton>
  </div>
{/if}

{#if loading}
  <div class="mt-4">
    <LoadingIndicator text="generating..." />
  </div>
{/if}

{#if error}
  <div class="mt-4">
    <Alert alertType="error" message={error}>
      <ActionButton slot="button" action={() => resetInputs()} buttonText="Restart">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
        </svg>
      </ActionButton>
    </Alert>
  </div>
{/if}

{#if invalidInput}
  <div class="mt-4">
    <Alert alertType="warning" message="This is not a valid url!" />
  </div>
{/if}

{#if encodedUrl}
  <div class="flex mt-4">
    <img class="h-64 w-64" alt="QR Code" src={encodedUrl} />
  </div>
{/if}

<div class="flex flex-col sm:flex-row justify-between">
  {#if encodedUrl}
    <div class="flex-grow mt-4 sm:mr-4">
      <DownloadButton data={encodedUrl} buttonText="Download" fileName="qrcode.png">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </DownloadButton>
    </div>
  {/if}

  {#if url || encodedUrl}
    <div class="flex-grow mt-4">
      <ActionButton action={() => resetInputs()} buttonText="Restart">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
        </svg>
      </ActionButton>
    </div>
  {/if}
</div>
