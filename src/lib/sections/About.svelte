<script>
	import Journalism from '$lib/sections/Journalism.svelte'
	import HumanRights from '$lib/sections/HumanRights.svelte'
</script>

<section id="about">
	<div class="inner">
		<div class="overline">About</div>
		<h2>
			What we do
		</h2>
		<p>
			Show Your Work is an initiative that advocates for a new standard for how we publish and understand images online. Founded by visual journalist Nora Savosnick and creative technologist Corey Tegeler, Show Your Work focuses its work within journalism and advocacy relating to human rights. We help prove that an image is real, rather than identifying what’s fake.
		</p>
		<p>
			How do we achieve this? We use cameras equipped with C2PA technology to capture photos, specifically regarding critical topics, where it's needed most. These cameras embed secure, encrypted metadata into each digital image at the point of capture. This data acts as a digital signature, verifying where, when, and how each photo was taken, ensuring its integrity from the moment it's captured.
		</p>
	</div>
	<Journalism />
	<HumanRights />
</section>