<script>
	export let popular;
	export const url = 'https://image.tmdb.org/t/p/w500';
</script>

<!-- <pre>{JSON.stringify(popular, null, 2)}</pre> -->

<div class="container mt-6 mx-auto grid gap-4 grid-cols-4 grid-rows-3 ">
	{#each popular as movie}
		<figure title={movie.original_title}>
			<a href={`/movie/${movie.id}`}>
				<img src={`${url}${movie.poster_path}`} alt="" />
			</a>
			<figcaption class="whitespace-nowrap overflow-hidden text-ellipsis">
				{movie.original_title}
			</figcaption>
		</figure>
	{/each}
</div>
