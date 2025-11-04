<script>
	import { TEAM } from '$src/constants'
	import Figure from '$lib/common/Figure.svelte'
	import Markdown from '$lib/common/Markdown.svelte'

	export const ITEMS = [
		{
			slug: 'nora',
			name: 'Nora Savosnick',
			role: 'Visual Journalist',
			website: 'https://norasavosnick.com',
			bio: 'Nora Savosnick (b. 1996) is a visual journalist whose work focuses on humanitarian crises and conflict coverage. Her work has taken her to report on conflicts in Ukraine, Haiti, Israel, and the Palestinian territories, while also covering politics across the United States.\n\nIn addition to her fieldwork, Nora gave a TEDx talk in 2023 and received the Reuters scholarship for visual journalism at the International Center of Photography in 2018.\n\nCurrently based in New York, her work has been published in publications such as The New York Times, Reuters, Aftenposten, Aftonbladet, among others.'
		},
		{
			slug: 'corey',
			name: 'Corey Tegeler',
			role: 'Creative Technologist',
			website: 'https://coreytegeler.com',
			bio: 'Corey Tegeler (b. 1992) is a creative technologist producing web-based projects for critical social impact research and other public-interest initiatives. He collaborates with academic institutions and non-profit organizations, as well as independent scholars, journalists, and artists, to create rich and meaningful data visualizations, explorative catalogs of archival material, and other methods of matching complex information systems with engaging interactivity.\n\nHe’s currently a Senior Developer at the digital agency Hyperobjekt where he creates data-driven dashboards for understanding complex social issues in the U.S. His recent work has tracked attacks against teaching race in schools with the Critical Race Studies Program at UCLA; uncovered the rising trend of re-segregation of schools with the Educational Opportunity Project at Stanford; and opened new doors for understanding the criminal justice system’s effects on society with the Institute for Social Research at the University of Michigan.'
		},
	];
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
			{#each ITEMS as item}
				<li class="col">
					<Figure
						src="/photos/syw_{item.slug}.jpg"
						alt="Portrait of {item.name}"
						caption="Photo by Roshni Khatri"
					/>
					<div class="label">
						<h3 class="name">
							{item.name}
						</h3>
						<div class="website">
							<a
								href="{item.website}"
								target="_blank"
								rel="noreferrer nofollow"
								class="button"
							>
								{item.website.replace('https://', '')}
								<!-- Website -->
							</a>
						</div>
					</div>
					<div class="role">
						{item.role}
					</div>
					<div class="bio">
						<Markdown
							content={item.bio}
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