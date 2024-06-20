<script>
	import { PEOPLE } from '$src/constants'
	import Markdown from '$lib/common/Markdown.svelte'
</script>

<section id="team">
	<div class="inner">
		<div class="overline">Team</div>
		<h2>
			Who we are
		</h2>

		<p>
			
		</p>

		<ul class="cols">
			{#each PEOPLE as person}
				<li class="col">
					<img
						src="/images/photos/syw_{person.slug}.jpg"
						alt="Portrait of {person.name}"
					/>
					<div class="label">
						<div class="name">
							{person.name}
						</div>
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
/*		max-width: 400px;*/
		padding: 0 var(--space-2) var(--space-10) var(--space-2);
		line-height: 1.3;
	}
	img {
		width: 100%;
	}
	.label {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
	.name {
		font-weight: var(--font-weight-bold);
		width: 160px;
	}
	.role {
		font-size: var(--text-2);
		white-space: nowrap;
		opacity: 0.5;
	}
	.website {
		font-size: var(--text-1);
	}
	.bio {
		margin-top: var(--space-2);
		font-size: var(--text-2);
	}
</style>