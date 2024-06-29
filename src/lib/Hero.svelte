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
	</div>
</section>

<style>
	section#hero {
		height: 100vh;
		padding-top: 6rem;
		padding-bottom: 6rem;
		background-color: var(--color-primary);
		background-image: url(/photos/photo_7.jpg);
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
		text-shadow: 0px 0px 25px rgba(0,0,0,0.25);
		cursor: default;
		user-select: none;
	}
	h1 span:first-child {
		color: var(--color-secondary);
	}
	h1 span:last-child {
		color: var(--color-secondary-dark);
	}
</style>