<script>
	import { TITLE } from '$src/constants'
</script>

<section id="hero">
	<div class="inner">
		<h1>
			{TITLE}
		</h1>
	</div>
</section>

<style>
	section#hero {
		height: 80vh;
		padding-top: 6rem;
		padding-bottom: 6rem;
		background-color: var(--color-primary);
		background-image: url(/images/photos/hero2.jpg);
/*		background-image: url(images/photos/hero6.jpg);*/
		background-position: center center;
		background-size: cover;
		color: var(--color-secondary);
	}
	h1 {
		margin: 0 0 var(--space-8) 0;
		text-align: center;
		text-shadow: 0px 0px 25px rgba(0,0,0,1);
	}
</style>