<script>
  let url = '';
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
    bind:value={url}
  />
</div>
