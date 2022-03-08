const key = import.meta.env.VITE_MOVIE_DB

export const get = async (params) => {
    const id = params.params.id
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
		)
		const data = await res.json()
		return {
			status: 200,
			body: { movie: data }
		}
	} catch (error) {
		console.error(error)
	}
}
