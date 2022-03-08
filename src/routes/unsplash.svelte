<script>
	export let photos
	let active = true
	export let search = ''
	$: !search ? active = true : active = false
	import {goto} from '$app/navigation'

	const submitLocation = () => {
		goto(`/location/${search}`)
	}
</script>
<!-- <pre>{JSON.stringify(photos, null, 2)}</pre> -->

<form class="mx-auto flex items-center mt-4" on:submit|preventDefault={submitLocation}>
	<input
		type="text"
		bind:value={search}
	name="search"
		id="search"
		placeholder=" enter your location..."
	/>
	<button disabled={active} >Send</button>
</form>

<div class="container mt-6 mx-auto grid gap-4 grid-cols-4 grid-rows-3 ">
	{#each photos as photo}
		<figure title={photo.alt_description}>
			<img src={photo.urls.small} alt="" />
			<figcaption class="whitespace-nowrap overflow-hidden text-ellipsis">
				{photo.alt_description}
			</figcaption>
		</figure>
	{/each}
</div>
