import axios from 'axios'

const ROOT_URL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json'

export const FETCH_WIKIS = 'FETCH_WIKIS'

export function fetchWikis(term) {
	// const url = `${ROOT_URL}&srsearch=${term}`
	const url = 'http://localhost:3000/api/wikisnippets'
	console.log('THIS IS THE TERM', term)
	const request = axios.get(url, {
		params: {
			TERM: term
		}
	})
	console.log('Request', request)
	return {
		type: FETCH_WIKIS,
		payload: request
	}
}

