<script>
	import { TITLE } from '$src/constants'
</script>

<section
	id="hero"
>
	<div class="inner">
		<h1>
			<span>Show Your Work</span> <span>Lab</span>
		</h1>
		<div
			id="tagline"
		>
			We prove what's real rather than identify what's fake
		</div>
		<!-- <img
			src="/images/logo-light.svg"
		/> -->
	</div>
</section>

<style>
	section#hero {
		height: 100vh;
		padding-top: 6rem;
		padding-bottom: 6rem;
		background-color: var(--color-primary);
		background-image: url(/photos/photo_7.jpg);
		background-position: center center;
		background-size: cover;
	}
	.inner {
		width: unset;
		max-width: unset;
	}
	h1 {
		margin: 0;
		font-size: 65px;
		font-weight: var(--font-weight-display-bold);
		text-align: center;

		text-shadow: 0px 0px 25px rgba(0,0,0,0.45);

		/*background: var(--color-primary);
		padding: 0.125em 0.25em;*/
	}
	h1 span:first-child {
		color: var(--color-secondary);
	}
	h1 span:last-child {
		color: var(--color-secondary-dark);
	}
	#tagline {
		color: var(--color-secondary);
		font-size: var(--text-3);
		font-family: var(--font-display);
		font-weight: var(--font-weight-display-normal);
		text-align: center;
		margin: var(--space-4) 0 0 0;

		text-shadow: 0px 0px 25px rgba(0,0,0,0.45);

		/*background: var(--color-primary);
		padding: 0.125em 0.25em;*/
	}
	img {
		width: 100%;
	}
</style>