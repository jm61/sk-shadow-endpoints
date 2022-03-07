const MOVIE_DB = process.env['MOVIE_DB'];

export const get = async () => {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_DB}&language=en-US&page=1`
		);
		const data = await res.json();
		console.log('SSR');
		return {
			status: 200,
			body: { popular: data.results }
		};
	} catch (error) {
		console.error(error);
	}
};
