import axios from 'axios'

const API_KEY = '248f4ff9366b7a46104566e76bd7aa11'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
	const reqUrl = `${ROOT_URL}&q=${city},us`
	const url = `http://localhost:3000/api?url=${reqUrl}`
	const request = axios.get(url)
	return {
		type: FETCH_WEATHER,
		payload: request 
	}
}
