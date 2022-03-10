<script>
	import logo from '../../static/logo.png';
	import home from '../../static/homeIcon.svg';	
</script>

<div class="navbar flex items-center mt-4 bg-purple-200 rounded-lg text-blue-800">
	<img class="w-20 rounded-3xl py-2" src={logo} alt="logo" />
	<nav class="ml-auto flex items-center">
		<a class="mr-6" href="/"><img src={home} alt="home" class="ml-2 h-6"></a>
		<a class="mx-6 hover:border-b-4 hover:border-blue-600" href="/moviedb">Movies</a>
		<a class="mx-6 hover:border-b-4 hover:border-blue-600" href="/unsplash">Photos</a>
		<a class="mx-6 hover:border-b-4 hover:border-blue-600" href="/login">Login</a>
		<a class="mx-6 hover:border-b-4 hover:border-blue-600" href="/contact">Contact</a>
		<a class="mx-6 hover:border-b-4 hover:border-blue-600" href="/gForm">Gforms</a>
	</nav>
</div>
