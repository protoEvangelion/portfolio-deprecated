import axios from 'axios'

export const FETCH_QUOTE = 'FETCH_QUOTE'

export function fetchQuote() {
	const url = 'http://localhost:3000/api/quote'
	const request = axios.get(url)
	return {type: FETCH_QUOTE, payload: request}
}
