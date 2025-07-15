<script>
	import { env } from '$env/dynamic/public';
</script>

<div class="container mx-auto p-4 sm:p-8 md:p-10 lg:p-12">
	<div
		class="bg-secondary-light dark:bg-secondary-dark rounded-lg p-6 shadow-lg sm:p-8 md:p-10 dark:shadow-xl"
	>
		<h1 class="mb-6 text-3xl font-bold !text-gray-800 sm:text-4xl dark:!text-white">
			Terms of Service
		</h1>

		<p class="mb-4 !text-gray-700 dark:!text-gray-300">Standing: June 2025</p>
		<div class="prose max-w-none">
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				Welcome to {env.PUBLIC_COMPANY_NAME}! These Terms of Service ("Terms") govern your use of
				our website and services (the "Service"). By accessing or using the Service, you agree to be
				bound by these Terms.
			</p>

			<h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
				1. Acceptance of Terms
			</h2>
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				By accessing and using our Service, you agree to comply with and be bound by these Terms and
				all applicable laws and regulations. If you do not agree with any of these Terms, you are
				prohibited from using or accessing this site.
			</p>

			<h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
				2. Use of Our Service
			</h2>
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				You are granted a non-exclusive, non-transferable, revocable license to access and use our
				Service strictly in accordance with these Terms.
			</p>

			<h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
				3. Prohibited Conduct
			</h2>
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				You agree not to use the Service for any purpose that is unlawful or prohibited by these
				Terms. This includes, but is not limited to:
			</p>
			<ul class="mb-4 list-inside list-disc text-gray-700 dark:text-gray-300">
				<li>
					Any <strong>abuse of our systems</strong>, including but not limited to, excessive
					requests, unauthorized access attempts, or any activity that disrupts or interferes with
					the integrity or performance of the Service.
				</li>
				<li>Distributing malware or other harmful code.</li>
				<li>
					Engaging in any activity that could damage, disable, overburden, or impair any {env.PUBLIC_COMPANY_NAME}
					server, or the network(s) connected to any {env.PUBLIC_COMPANY_NAME} server.
				</li>
			</ul>
			<p class="mb-4 font-bold text-red-600 dark:text-red-400">
				We reserve the right to blacklist IP addresses or take any other necessary action against
				users who abuse our systems. If your actions, or those of someone representing you, cause us
				harm or constitute abuse while breaking any applicable laws, we may also pursue legal
				action.
			</p>

			<h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
				4. Recommendation: Host Your Own!
			</h2>
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				We encourage and recommend users to <strong>host their own instances</strong> of {env.PUBLIC_COMPANY_NAME}.
				Self-hosting provides you with full control over your data and infrastructure, aligning with
				principles of privacy and decentralization.
			</p>

			<h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
				5. Disclaimer of Warranties
			</h2>
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				The Service is provided on an "as is" and "as available" basis. We make no warranties,
				expressed or implied, and hereby disclaims and negates all other warranties, including
				without limitation, implied warranties or conditions of merchantability, fitness for a
				particular purpose, or non-infringement of intellectual property or other violation of
				rights.
			</p>

			<h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
				6. Limitation of Liability
			</h2>
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				In no event shall {env.PUBLIC_COMPANY_NAME} or its suppliers be liable for any damages (including,
				without limitation, damages for loss of data or profit, or due to business interruption) arising
				out of the use or inability to use the materials on {env.PUBLIC_COMPANY_NAME}'s website,
				even if {env.PUBLIC_COMPANY_NAME} or a {env.PUBLIC_COMPANY_NAME} authorized representative has
				been notified orally or in writing of the possibility of such damage.
			</p>

			<h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
				7. Changes to Terms
			</h2>
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
				If a revision is material, we will provide at least 30 days' notice prior to any new terms
				taking effect. What constitutes a material change will be determined at our sole discretion.
			</p>

			<h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
				8. Governing Law
			</h2>
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				These Terms shall be governed and construed in accordance with the laws of {env.PUBLIC_COMPANY_REGION},
				without regard to its conflict of law provisions.
			</p>

			<h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
				9. Contact Information
			</h2>
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				If you have any questions about these Terms, please contact us at: <a
					href="mailto:{env.PUBLIC_COMPANY_EMAIL}"
					class="text-blue-600 hover:underline dark:text-blue-400 dark:hover:underline"
					>{env.PUBLIC_COMPANY_EMAIL}</a
				>.
			</p>
		</div>
	</div>
</div>
