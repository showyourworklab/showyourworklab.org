<script>
	import { onMount } from 'svelte'
	import '$src/globals.css'
	import '$src/styles.css'
	import Hero from '$lib/Hero.svelte'
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'

	let main
	let header
	let y = 0
	let fillHeader = false
	$: onScroll(y);

	const onScroll = () => {
		const mainTop = main ? main?.getBoundingClientRect()?.top : null
		const headerHeight = header ? header?.getBoundingClientRect()?.height : null
		fillHeader = mainTop < headerHeight + 10
	}
</script>

<svelte:window bind:scrollY={y} />
<div id="home" />
<Header
	bind:header
	fill={fillHeader}
/>
<Hero />
<main
	bind:this={main}
>
	<slot />
</main>
<Footer />
