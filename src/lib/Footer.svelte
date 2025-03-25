<script>
	import { TITLE, SECTIONS, GITHUB, EMAIL } from '$src/constants'
</script>

<footer>
	<div class="inner">
		<div>
			<a href="#home">
				<span
					class="sr"
				>
					{TITLE}
				</span>
				<img
					src="/images/logo-light.svg"
					alt="Logo for Show Your Work Lab"
				/>
			</a>
		</div>
		<div class="cols">
			<div class="col">
				<nav>
					<ul>
						{#each SECTIONS as section}
							<li>
								<a
									href="#{section.slug}"
									class="button"
								>
									{section.title}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
			<div class="col">
				<ul>
					<li>
						<a
							href="{GITHUB}"
							target="_blank"
							rel="noreferrer nofollow"
							class="button"
						>
							Find us on GitHub
						</a>
					</li>
					<li>
						<a href="mailto:{EMAIL}" class="button">{EMAIL}</a>
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
	a[href="#home"] img {
		width: 10rem;
		height: auto;
	}
	.inner {
		padding: 2rem;
		max-width: unset;
	}
	.inner > div:first-child {
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		/*border-bottom: 1px currentColor dotted;*/
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		max-width: unset;
		font-size: var(--text-2);
	}
	li {
		padding-left: 0;
	}
	li a {
		text-transform: lowercase;
	}
	:not(nav) > ul {
		text-align: right;
	}
</style>