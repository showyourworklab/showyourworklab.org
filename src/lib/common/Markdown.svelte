<script>
	import SvelteMarkdown from 'svelte-markdown'
	import MarkdownLink from './MarkdownLink.svelte'
	export let content
</script>

<SvelteMarkdown
	source={content}
	renderers={{
		link: MarkdownLink
	}}
/>

<style>
</style>