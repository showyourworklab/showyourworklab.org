<script>
	import '$src/globals.css'
	import '$src/styles.css'
	import Hero from '$lib/Hero.svelte'
<<<<<<< HEAD
</script>

=======
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'

	let main
	let header
	let y = 0
	let belowFold = false
	$: onScroll(y)

	const onScroll = () => {
		const mainTop = main ? main?.getBoundingClientRect()?.top : null
		const headerHeight = header ? header?.getBoundingClientRect()?.height : null
		belowFold = Boolean(
			mainTop !== null
			&& headerHeight !== null
			&& (mainTop < headerHeight + 10)
		)
	}
</script>

<svelte:window bind:scrollY={y} />
<div id="home" />
<Header
	bind:header
	belowFold={belowFold}
/>
>>>>>>> 8930d919615d9555715455fd33e7dd7adbf502b6
<Hero />
<slot />