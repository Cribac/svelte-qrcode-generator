<script>
	import QRCode from 'qrcode';
	import Button, { Label } from '@smui/button';

	let clicked = 0;

	let data = {
		name: "Fooberto Testino",
		department: "Marketing",
		website: "testino.tld",
		id: "aisuoiqu3234738jdhf100223",
	};

	let stringdata = JSON.stringify(data);

	let qrImage;

	QRCode.toDataURL(stringdata, function (err, url) {
		if(err) return console.log("error occured");
		qrImage = url;
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<img alt="QR Code" src="{qrImage}" />

<Button on:click={() => clicked++}>
	<Label>Default</Label>
</Button>
