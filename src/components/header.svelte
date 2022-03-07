<script>
	import logo from '../../static/logo.png';
	import finger from '../../static/finger.png';
	let active = true
	let search = ''
	$: !search ? active = true : active = false
</script>

<div class="navbar flex items-center mt-4 bg-purple-200 rounded-lg text-blue-800">
	<img class="w-24 rounded-3xl py-2" src={logo} alt="logo" />
	<form action="" class="mx-auto flex items-center">
		<label for="search" />
		<input
			type="text"
			bind:value={search}
		name="search"
			id="search"
			placeholder=" enter your search..."
		/>
		<button disabled={active} type="submit"><img src={finger} alt="" class="ml-2 h-6" /> </button>
	</form>
	<nav class="ml-auto">
		<a class="mr-6 hover:border-b-4 hover:border-blue-600" href="/">Home</a>
		<a class="mx-6 hover:border-b-4 hover:border-blue-600" href="/moviedb">Movies</a>
		<a class="mx-6 hover:border-b-4 hover:border-blue-600" href="/unsplash">Photos</a>
	</nav>
</div>
