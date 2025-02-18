<script>
	import { PRESS } from '$src/constants'

	export const ITEMS = [
		{
			title: 'Det er ikke mulig å bevise hvor bildet mitt kommer fra. Er ikke det helt sjukt?',
			source: 'Journalisten',
			url: 'https://www.journalisten.no/det-er-ikke-mulig-a-bevise-hvor-bildet-mitt-kommer-fra-er-ikke-det-helt-sjukt/634483',
			date: '2025-06-02'
		},
		{
			title: 'This could be a game-changer for fake news',
			source: 'The Detour',
			url: 'https://exploreframe.substack.com/p/this-could-be-a-game-changer-for',
			date: '2024-08-28'
		}
	]
</script>

<section id="press">
	<div class="inner">
		<!-- <div class="overline">
			{VALUES.overline}
		</div> -->
		<h2>
			{PRESS.title}
		</h2>
		<ul>
			{#each ITEMS as item}
				<li>
					<div class="source">
						{item.source}
					</div>
					<h3 class="name">
						<a href={item.url} target="_blank">
							{item.title}
						</a>
					</h3>
					<div class="date">
						{item.date}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	#press .inner {
		/* max-width: unset; */
	}
	#press ul {
		max-width: unset;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		list-style: none;
	}
	#press li {
		padding: 0;
		/* width: 25rem; */
	}
	#press li .source {
		font-weight: var(--font-weight-body-bold);
	}
	#press li .date {
		font-size: var(--text-2);
    	color: var(--color-primary-light);
	}
	#press li a {
		
	}
	#press li a:hover {
		text-decoration-color: var(--color-primary);
	}
	#press li:not(:last-child) {
		padding-bottom: 2rem;
		margin-bottom: 2rem;
		border-bottom: 2px solid var(--color-secondary-dark);
	}
</style>