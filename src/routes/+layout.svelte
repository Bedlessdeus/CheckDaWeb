<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();

	let pattern_def = '^https:\\/\\/([a-zA-Z\\d\\-]{1,63}\\.){1,62}[a-zA-Z\\-]{1,63}$';
</script>

{@render children()}

{#if page.route.id === '/'}
	<div class="flex min-h-screen flex-col items-center justify-center">
		<form method="GET" action="search?/" class="box flex w-[50%] flex-col rounded-lg p-4">
			<h1 class="!text-logo text-center !text-6xl">CheckDaWeb</h1>
			<label for="url">Enter A URL</label>
			<input
				class="bg-secondary-dark"
				id="url"
				name="url"
				type="text"
				pattern={pattern_def}
				placeholder="e.g. https://bedless.dev"
			/>

			<input
				type="submit"
				value="Check"
				class="bg-primary-cont mt-2 cursor-pointer rounded-lg p-2 text-white"
			/>
		</form>

		<div class="box mt-40 flex w-[50%] flex-col rounded-lg p-4">
			<p class="!text-logo pb-4 !text-2xl">What we Check</p>
			<div class="flex flex-row justify-evenly">
				<ul>
					<li>IP Info</li>
					<li>SSL Chain</li>
					<li>DNS Records</li>
					<li>Cookies</li>
					<li>Headers</li>
				</ul>
				<ul>
					<li>Quality Metrics</li>
					<li>Server Location</li>
					<li>Associated Hosts</li>
					<li>TXT Records</li>
				</ul>
			</div>
		</div>
	</div>
{/if}

<footer class="bg-secondary-dark sticky bottom-0 p-4 text-center">
	<p>Licensed under MIT</p>
</footer>