<script>
	import { TITLE, SECTIONS, GITHUB, EMAIL } from '$src/constants'
</script>

<footer>
	<div class="inner">
		<div>
			<a href="#home">
				{TITLE}
			</a>
		</div>
		<div class="cols">
			<div class="col">
				<nav>
					<ul>
						{#each SECTIONS as section}
							<li>
								<a href="#{section.slug}">
									{section.label}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
			<div class="col">
				<ul>
					<li>
						<a href="{GITHUB}">Find us on GitHub</a>
					</li>
					<li>
						<a href="mailto:{EMAIL}">{EMAIL}</a>
					</li>
					<!-- <li>
						<a href="#contact">Contact</a>
					</li> -->
				</ul>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 2rem;
		display: flex;
		background-color: var(--color-primary);
		color: var(--color-secondary);
	}
	a {
		/* outline: none;	 */
		/* text-decoration: underline; */
		/* padding: 0; */
		/* margin: 0; */
	}
	a[href="#home"] {
		text-decoration: none;
	}
	.inner > div:first-child {
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px currentColor dotted;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: var(--text-2);
	}
	:not(nav) > ul {
		text-align: right;
	}
</style>