<script>
	import SvelteMarkdown from 'svelte-markdown'
	import MarkdownLink from './MarkdownLink.svelte'
	export let src = null
	export let alt = ""
	export let caption = null
</script>

<figure>
	<img
		src={src}
		alt={alt}
	/>
	{#if caption}
		<figcaption>
			{caption}
		</figcaption>
	{/if}
</figure>

<style>
	figure {
		margin: 0;
		width: 100%;
		position: relative;
	}
	img {
		width: 100%;
	}
	figcaption {
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		padding: var(--space-2);
		color: var(--color-secondary);
		font-size: var(--text-1);
		text-align: right;
		line-height: 1;
		text-shadow: 0px 0px 5px rgba(0,0,0,1);
		opacity: 0.75;
		/*transition: opacity 100ms ease;*/
		/*opacity: 0;*/
	}
	/*figure:hover figcaption {
		opacity: 0.75;
	}*/
</style>