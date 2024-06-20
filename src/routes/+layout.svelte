<script>
	import '$src/globals.css'
	import '$src/styles.css'
	import Hero from '$lib/Hero.svelte'
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
</script>

<div id="home" />
<Header />
<Hero />
<main>
	<slot />
</main>
<Footer />
