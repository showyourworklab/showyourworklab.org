<script>
	import { TEAM, PEOPLE } from '$src/constants'
	import Figure from '$lib/common/Figure.svelte'
	import Markdown from '$lib/common/Markdown.svelte'
</script>

<section id="team">
	<div class="inner">
		<!-- <div class="overline">
			{TEAM.overline}
		</div> -->
		<h2>
			{TEAM.title}
		</h2>

		<p>
			
		</p>

		<ul class="cols">
			{#each PEOPLE as person}
				<li class="col">
					<Figure
						src="/photos/syw_{person.slug}.jpg"
						alt="Portrait of {person.name}"
						caption="Photo by Roshni Khatri"
					/>
					<div class="label">
						<h3 class="name">
							{person.name}
						</h3>
						<div class="website">
							<a
								href="{person.website}"
								target="_blank"
								class="button"
							>
								{person.website.replace('https://', '')}
								<!-- Website -->
							</a>
						</div>
					</div>
					<div class="role">
						{person.role}
					</div>
					<div class="bio">
						<Markdown
							content={person.bio}
						/>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	ul {
		list-style: none;
		padding-left: 0;
		margin: 0 calc(var(--space-2) * -1);
		max-width: unset;
	}
	li {
		max-width: var(--width-paragraph);
		padding: 0 var(--space-2) var(--space-10) var(--space-2);
		line-height: 1.3;
	}
	h3 {
		color: inherit;
		font-size: inherit;
		text-transform: none;
	}
	.label {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
	.name {
		font-weight: var(--font-weight-body-bold);
		width: 160px;
	}
	.role {
		font-size: var(--text-2);
		white-space: nowrap;
		color: var(--color-primary-light);
	}
	.website {
		font-size: var(--text-1);
	}
	.bio {
		margin-top: var(--space-2);
		font-size: var(--text-2);
	}
</style>