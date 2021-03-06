const key = import.meta.env.VITE_MOVIE_DB

export const get = async () => {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
		)
		const data = await res.json()
		return {
			status: 200,
			body: { popular: data.results }
		}
	} catch (error) {
		console.error(error)
	}
}
