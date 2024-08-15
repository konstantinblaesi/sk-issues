<script lang="ts">
	import { page } from '$app/stores';
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	export let data;

	let options = undefined;
	// bug workaround: set resetForm: false
	// options = { resetForm: false };
	const sForm1 = superForm(data.form1, options);
	const sForm2 = superForm(data.form2);

	const { errors: errors1 } = sForm1;
	const { errors: errors2 } = sForm2;
</script>

<SuperDebug data={{ $errors1, $errors2, $page }} />

<br />
<a href="?error">Trigger error</a>
<br />
<a href="/">Remove error</a>
