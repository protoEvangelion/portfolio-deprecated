import { FETCH_WIKIS } from '../actions/index'

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WIKIS:
			return [action.payload.data, ...state]
	}
	return state
}