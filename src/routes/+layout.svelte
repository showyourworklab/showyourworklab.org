<script>
	import '$src/globals.css'
	import '$src/styles.css'
	import Hero from '$lib/hero.svelte'
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<div id="home" />
<Header />
<Hero />
<main>
	<slot />
</main>
<Footer />
