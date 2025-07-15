<script lang="ts" nonce="{data.nonce}">
	import { page } from '$app/state';
	import { chunkArray } from '$lib/client/util';
	import '../app.css';

	let { children, data } = $props();

	const URL_PATTERN = '^https:\\/\\/([a-zA-Z\\d\\-]{1,63}\\.){1,62}[a-zA-Z\\-]{1,63}$';

	let serviceChunks = $derived(chunkArray(data.services || [], 5));
</script>

{@render children()}

{#if page.route.id === '/'}
	<div class="flex min-h-screen flex-col items-center justify-center">
		<form
			method="GET"
			action="search?/"
			class="box bg-primary-dark flex w-[50%] flex-col rounded-lg p-4"
		>
			<h1 class="!text-logo mb-6 text-center !text-6xl">CheckDaWeb</h1>

			<label for="url" class="mb-2 font-medium">Enter A URL</label>
			<input
				class="bg-secondary-dark mb-4"
				id="url"
				name="url"
				type="text"
				pattern={URL_PATTERN}
				placeholder="e.g. https://bedless.dev"
				required
				aria-describedby="url-help"
			/>

			<button type="submit"> Check Website </button>
		</form>

		<section class="box bg-primary-dark mt-16 flex w-[50%] flex-col rounded-lg p-4">
			<h2 class="!text-logo mb-4 !text-2xl">What we Check</h2>
			<div class="grid grid-cols-2 gap-8">
				{#each serviceChunks as chunk}
					<ul class="space-y-2">
						{#each chunk as service}
							<li class="flex items-center">
								<img class="mr-2 w-6" alt="Icon" src="data:image/svg+xml;base64,{service.svg}" />
								{service.content}
							</li>
						{/each}
					</ul>
				{/each}
			</div>
		</section>
	</div>
{/if}

<footer class="bg-primary-dark sticky bottom-0 p-4 text-center">
	<p class="text-sm text-gray-400">Licensed under MIT</p>
</footer>
