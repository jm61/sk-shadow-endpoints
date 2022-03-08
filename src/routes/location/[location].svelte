<script>
    export let photos
</script>

<!-- <pre>{JSON.stringify(photos, null, 2)}</pre> -->

<div class="container mt-6 mx-auto grid gap-4 grid-cols-4 grid-rows-3 ">
	{#each photos as photo}
		<figure title={photo.alt_description}>
			<img src={photo.urls.regular} alt="" />
			<figcaption class="whitespace-nowrap overflow-hidden text-ellipsis">
				{photo.alt_description}
			</figcaption>
		</figure>
	{/each}
</div>
