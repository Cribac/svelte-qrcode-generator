<script>
	import QRCode from 'qrcode';
	import Button, { Icon, Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text/index';
	import IconButton from '@smui/icon-button';

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

<h1>Welcome to SvelteKit</h1>
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

<Button color="primary" variant="unelevated" on:click={addEmptyDataSet}>
	<Label>Add Data</Label>
	<Icon class="material-icons">add</Icon>
</Button>

{#if dataSet.length > 0}
	{#each dataSet as ds}
		<div>
			<Textfield bind:value={ds.label} label="Label">
				<HelperText slot="helper">Add Label</HelperText>
			</Textfield>
		</div>

		:
		<div>
			<Textfield bind:value={ds.data} label="Label">
				<HelperText slot="helper">Add Data</HelperText>
			</Textfield>
		</div>
		<div style="display: flex; align-items: center;">
			<IconButton class="material-icons" on:click={addDataSet(ds.label, ds.data)}>save</IconButton>
		</div>
		<pre>{ds.label}:{ds.data}</pre>
	{/each}
{/if}
