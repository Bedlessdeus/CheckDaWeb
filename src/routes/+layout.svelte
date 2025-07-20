<script lang="ts" nonce="{data.nonce}">
	import '../app.css';

	let { children, data } = $props();
</script>

{@render children()}

<footer class="bg-primary-dark sticky bottom-0 p-4 text-center">
	<p class="text-sm text-gray-400">Licensed under MIT</p>
</footer>
