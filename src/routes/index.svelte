<script>
	import QRCode from 'qrcode';

	const generateCode = true;
	let dataSet = [];

	function addEmptyDataSet() {
		dataSet = [...dataSet, { label: '', data: '' }];
	}

	function addDataSet(label, data) {
		dataSet = [...dataSet, { label , data }];
		return dataSet;
	}

	let data = {
		name: "Fooberto Testino",
		department: "Marketing",
		website: "testino.tld",
		id: "aisuoiqu3234738jdhf100223",
	};

	let stringdata = JSON.stringify("https://exop-group.com/en/");

	async function generateQr(text) {
		return QRCode.toDataURL(text);
	}
</script>

<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if generateCode}
	{#await generateQr(stringdata)}
		<div>generating...</div>
	{:then dataString}
		<img alt="QR Code" src="{dataString}" />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{/if}
