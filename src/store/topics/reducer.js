// reducers hold and modify the store's state. 
// the initial state object defines it
// reducers are the only way to change the stores state
// the others exports in this file are selectors which is biz logic
// that digests the state to be consumed by the view lawyer
import _ from 'lodash'
import * as types from './actionTypes'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	topicsByUrl: undefined,
	selectedTopicUrls: []
})

export default function reduce(state = initialState, action={}) {
	switch (action.type) {
		case types.TOPICS_FETCHED:
			return state.merge({
				topicsByUrl: action.topicsByUrl
			})
		default: 
			return state
	}
}

//selectors
export const getTopicsByUrl = (state) => {
	return state.topics.topicsByUrl
}

export const getTopicsByUrlArray = (state) => {
	return _.keys(state.topics.topicsByUrl)
}