<script>
	import { TITLE } from '$src/constants'
</script>

<section id="hero">
	<div class="inner">
		<h1>{TITLE}</h1>
	</div>
</section>

<style>
	section#hero {
		height: 80vh;
		padding-top: 6rem;
		padding-bottom: 6rem;
		background-color: var(--color-primary);
		/* background-image: url(images/hero-1.jpg); */
		background-position: center top;
		background-size: cover;
		color: var(--color-secondary);
	}
	h1 {
		margin: 0 0 var(--space-8) 0;
	}
</style>