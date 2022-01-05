<script>
	import QRCode from 'qrcode';

	let text = '';

	let stringdata = '';

	let generateOk = false;

	function handleGenerate() {
		stringdata = JSON.stringify(text);
		generateOk = true;
		text = '';
	}

	async function generateQr(text) {
		return QRCode.toDataURL(text);
	}
</script>

<p>TEXT</p>
<div class="flex flex-col">
	<label for="input-text">
		Please input your text
	</label>
	<textarea
		id="input-text"
		type="text"
		class="flex-grow h-64 p-2"
		bind:value={text}
	></textarea>

	<p>text: {text}</p>
	<p>stringdata: {stringdata}</p>

	{#if text.length > 0}
		<button
			type="button"
			on:click={handleGenerate}
		>
			Generate QRCode
		</button>
	{/if}

	{#if generateOk && text.length === 0}
		{#await generateQr(stringdata)}
			<div>generating...</div>
		{:then dataString}
			<img alt="QR Code" src="{dataString}" />
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	{/if}
</div>
