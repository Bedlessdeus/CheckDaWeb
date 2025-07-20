<script>
	let { data } = $props();
</script>

<div class="flex min-h-screen flex-col items-center justify-center py-8">
	<div class="box bg-primary-dark w-[80%] max-w-4xl rounded-lg p-8">
		<h1 class="!text-logo mb-8 text-center !text-4xl">Credits & Attributions</h1>

		<p class="mb-8 text-center text-gray-300">
			CheckDaWeb is made possible by these amazing open-source projects and resources.
		</p>

		{#each Object.entries(data.credits) as [categoryName, items]}
			{console.log(categoryName, items)}
			<section class="mb-8">
				<h2 class="!text-logo mb-6 border-b border-gray-600 pb-2 !text-2xl">{categoryName}</h2>

				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each Object.entries(items) as [itemName, details]}
						<div class="bg-secondary-dark rounded-lg p-4 transition-transform hover:scale-105">
							<h3 class="mb-3 !text-xl text-white">{itemName}</h3>

							<div class="space-y-2 text-sm">
								<div>
									<span class="font-medium text-gray-400">Authors:</span>
									<span class="text-gray-300">{details.author.join(', ')}</span>
								</div>

								<div>
									<span class="font-medium text-gray-400">License:</span>
									<span class="text-gray-300">{details.license}</span>
								</div>

								<div>
									<a
										href={details.url}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
									>
										Visit Project
										<svg class="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/each}

		<div class="mt-12 rounded-lg bg-gray-800 p-6 text-center">
			<h3 class="mb-2 !text-lg text-white">Thank You!</h3>
			<p class="text-gray-300">
				We're grateful to all the developers and contributors who make these projects possible. Open
				source makes the web a better place for everyone.
			</p>
		</div>
	</div>
</div>
