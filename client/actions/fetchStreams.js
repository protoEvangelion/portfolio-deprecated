import axios from 'axios'

export const FETCH_STREAMS = 'FETCH_STREAMS'

export function fetchStreams() {
	let clientId = 'aswjx355ya1e5y7vy3t5sg1hcwsaokn'
	let url = `https://api.twitch.tv/kraken/streams/featured?limit=10&client_id=${clientId}`
	const reqUrl = `http://localhost:3000/api?url=${url}`
	const request = axios.get(reqUrl)
	return {type: FETCH_STREAMS, payload: request}
}
