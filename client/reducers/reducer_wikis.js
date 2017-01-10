import { FETCH_WIKIS } from '../actions/fetchWikis'

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WIKIS:
			return [action.payload.data.query.search, ...state]
	}
	return state
}
