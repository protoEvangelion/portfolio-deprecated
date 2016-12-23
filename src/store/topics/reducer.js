// reducers hold and modify the store's state. 
// the initial state object defines it
// reducers are the only way to change the stores state
// the others exports in this file are selectors which is biz logic
// that digests the state to be consumed by the view lawyer

import Immutable from 'seamless-immutable'

const initialState = Immutable({
	topicsByUrl: {},
	selectedTopicUrls: []
})

export default function reduce(state = initialState, action={}) {
	switch (action.type) {
		default: 
			return state
	}
}