import axios from 'axios'

export const FETCH_WIKIS = 'FETCH_WIKIS'

export function fetchWikis(term) {
	const reqUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&utf8=&format=json`
	const url = `http://localhost:3000/api?url=${reqUrl}`
	const request = axios.get(url)
	return {
		type: FETCH_WIKIS,
		payload: request
	}
}
