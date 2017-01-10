import axios from 'axios'

const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng='

export const FETCH_GEODATA = 'FETCH_GEODATA'

export function fetchGeoData(lat, lng) {
	const reqUrl = `${ROOT_URL}${lat},${lng}`
	const url = `http://localhost:3000/api?url=${reqUrl}`
	const request = axios.get(url)
	return {
		type: FETCH_GEODATA,
		payload: request
	}
}