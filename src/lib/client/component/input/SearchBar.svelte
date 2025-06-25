<script lang="ts">
	import SearchIcon from '../icon/SearchIcon.svelte';

	let { url, path }: { url: string; path: string } = $props();

	let pattern_def = '^(https?:\\/\\/)?([a-zA-Z\\d\\-]{1,63}\\.){1,62}[a-zA-Z\\-]{1,63}\\/?$';
</script>

<form class="flex w-[50%] flex-row p-4" method="GET" action="{path}?/">
	<input
		class="bg-secondary-dark w-[90%] border-none !rounded-r-none"
		id="url"
		name="url"
		type="text"
		pattern={pattern_def}
		value={url}
		placeholder="e.g. https://bedless.dev"
	/>
	<button type="submit" class="flex w-[10%] max-w-16 items-center justify-center !rounded-l-none">
		<SearchIcon clasz="h-10" />
	</button>
</form>
