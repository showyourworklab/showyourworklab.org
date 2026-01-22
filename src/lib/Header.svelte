<script>
	import { TITLE, SECTIONS } from '$src/constants'
	export let header = ''
	export let belowFold = false
</script>

<header
	bind:this={header}
	class="{belowFold ? "below-fold" : ""}"
>
	<a
		href="#home"
		id="title"
	>
		<span
			class="sr"
		>
			{TITLE}
		</span>
		<img
			src="/images/logo-light.svg"
			alt="Logo for Show Your Work Lab"
			id="logo-lg"
			class="logo"
		/>
		<img
			src="/images/logo-sm-light.svg"
			alt="Logo for Show Your Work Lab"
			id="logo-sm"
			class="logo"
		/>
	</a>
	<nav>
		<ul>
			{#each SECTIONS as section}
				<li>
					<a
						href="#{section.slug}"
						class="button invert"
					>
						{section.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		width: 100%;
		height: 3.5rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		padding: 0.5rem 1rem;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		color: var(--color-secondary);
		/* transition: background-color 50ms ease; */
		transition: background-color 300ms var(--transition-function);
		@media (min-width: 768px) {
			padding: 0.5rem 2rem;
		}
	}
	header.below-fold {
		background-color: var(--color-primary);
	}
	#title {
		padding: 0;
		outline: none;
		display: flex;
		font-weight: var(--font-weight-display-bold);
		text-decoration: none;
		text-transform: lowercase;
	}
	img.logo {

	}
	img#logo-lg {
		height: 1.25rem;
		width: auto;
		display: none;
	}
	header.below-fold img#logo-lg {
		display: block;
	}
	img#logo-sm {
		height: 1.75rem;
		width: auto;
		display: block;
	}
	header.below-fold img#logo-sm {
		display: none;
	}
	nav {
		position: relative;
		display: none;
		@media (min-width: 768px) {
			display: block;
		}
	}
	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		list-style-type: none;
	}
	li {
		padding: 0;
		margin-right: 0.25em;
		white-space: nowrap;
	}
	li a.button {
		text-transform: lowercase;
		font-family: var(--font-display);
		font-weight: var(--font-weight-display-normal);
	}
	li a.button {
		backdrop-filter: blur(0.5px);
		background-color: rgba(0,0,0,0.2);
	}
	header.below-fold li a.button {
		
	}
</style>