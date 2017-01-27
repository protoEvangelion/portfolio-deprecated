import axios from 'axios'

export const FETCH_QUOTE = 'FETCH_QUOTE'

export function fetchQuote() {
	let randNum = Math.floor((Math.random() * 100000) + 1)
	let url = `http://api.forismatic.com/api/1.0/?&method=getQuote&key=${randNum}&format=json&lang=en`
	console.log('fetching quotes', process.env.NODE_ENV)
	const host = process.env.NODE_ENV === 'production' ? 'https://mysterious-plains-15364.herokuapp.com' : 'http://localhost:3000'
	const reqUrl = `${host}/api?url=${url}`
	const request = axios.get(reqUrl)
	return {type: FETCH_QUOTE, payload: request}
}
