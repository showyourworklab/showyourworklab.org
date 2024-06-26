<script>
	import { ABOUT } from '$src/constants'
	import Journalism from '$lib/sections/Journalism.svelte'
	import HumanRights from '$lib/sections/HumanRights.svelte'
</script>

<section id="about">
	<div class="inner">
		<!-- <div class="overline">
			{ABOUT.overline}
		</div> -->
		<h2>
			{ABOUT.title}
		</h2>
		<p>
			The images we see online are increasingly difficult to trust and understand. Information about where, when, and how an image is made is often minimal, unverified, nonexistent, or intentionally misleading. The rise of synthetic AI images further amplifies this issue, sowing distrust and confusion in what we see online.
		</p>
		<p>
			We see a void in how the industry addresses this issue and believe a new standard for verifiable images online are urgently needed.
		</p>
		<p>
			The Show Your Work Lab helps fill this void. We partner with news organizations and human rights groups to define a new standard for verifiable images to foster increased trust with their audiences. We use verify-at-capture technology to produce original visual journalism covering critical stories and create innovative methods to ensure images are engaging, context-rich, and trustworthy. We don't just identify what's fake; we prove what's real.
		</p>
	</div>
	<Journalism />
	<HumanRights />
</section>