import { FETCH_QUOTE } from '../actions/index'

const initialState = {
	quote: {
		quoteText: 'People may doubt what you say, but they will believe what you do.',
		quoteAuthor: 'Lewis Cass',
		quoteLink: 'http://forismatic.com/en/c631e85a9a/'
	}
}

export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_QUOTE:
			return Object.assign({}, state, {
				quote: action.payload.data
			})
	}
	return state
}