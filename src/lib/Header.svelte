<script>
	import { TITLE, SECTIONS } from '$src/constants'
</script>

<header>
	<a
		href="#home"
		id="title"
	>
		{TITLE}
	</a>
	<nav>
		<ul>
			{#each SECTIONS as section}
				<li>
					<a
						href="#{section.slug}"
						class="button"
					>
						{section.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		padding: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: var(--color-primary);
		color: var(--color-secondary);
	}
	#title {
		padding: 0;
		outline: none;
		text-decoration: none;
	}
	nav {
		position: relative;
	}
	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: row;
		list-style-type: none;
	}
	li {
		margin-right: 0.25em;
	}
</style>