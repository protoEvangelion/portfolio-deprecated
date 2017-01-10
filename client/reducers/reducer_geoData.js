import { FETCH_GEODATA } from '../actions/fetchGeoData'

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_GEODATA:
			return Object.assign({}, state, action.payload.data)
		default: 
			return state
	}
} 