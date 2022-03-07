const ACCESS_KEY = process.env['ACCESS_KEY'];
//import { createApi } from 'unsplash-js';
const url = 'https://api.unsplash.com';

export const get = async () => {
	try {
		const res = await fetch(`${url}/search/photos?query=toulon&client_id=${ACCESS_KEY}`);
		const data = await res.json();
		console.log('UNSPLASH');
		return {
			status: 200,
			body: { photos: data.results }
		};
	} catch (error) {
		console.error(error);
	}
};
