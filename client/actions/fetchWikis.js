import axios from 'axios'

export const FETCH_WIKIS = 'FETCH_WIKIS'

export function fetchWikis(term) {
	const url = 'http://localhost:3000/api/wikisnippets'
	const request = axios.get(url, {
		params: {
			TERM: term
		}
	})
	return {
		type: FETCH_WIKIS,
		payload: request
	}
}