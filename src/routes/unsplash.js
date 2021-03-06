const url = 'https://api.unsplash.com'
const key = import.meta.env.VITE_ACCESS_KEY
export const get = async () => {
	try {
		const res = await fetch(`${url}/search/photos?query=berlin&client_id=${key}`);
		const data = await res.json()
		return {
			status: 200,
			body: { photos: data.results }
		};
	} catch (error) {
		console.error(error)
	}
}
