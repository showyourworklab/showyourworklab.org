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
		<!-- <div
			id="tagline"
		>
<<<<<<< Updated upstream
			We don't just identify what's fake; we prove what's real.
		</div> -->
=======
			We prove what's real rather than identify what's fake
		</div>
>>>>>>> Stashed changes
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
		background-image: url(/images/photos/photo_7.jpg);
/*		background-image: url(images/photos/hero6.jpg);*/
		background-position: center center;
		background-size: cover;
	}
	.inner {
		width: unset;
		max-width: unset;
	}
	h1 {
		margin: 0;
		/*margin: 0 0 var(--space-8) 0;*/
		font-weight: var(--font-weight-display-bold);
		text-align: center;
		text-shadow: 0px 0px 25px rgba(0,0,0,0.45);
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
		font-weight: var(--font-weight-body-bold);
		text-shadow: 0px 0px 25px rgba(0,0,0,0.45);
		text-align: center;
		margin: var(--space-4) 0 0 0;
	}
	img {
		width: 100%;
	}
</style>