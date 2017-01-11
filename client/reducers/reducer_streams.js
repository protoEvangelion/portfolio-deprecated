import { FETCH_STREAMS } from '../actions/fetchStreams'

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_STREAMS:
      return Object.assign({}, state, {
        featured: action.payload.data.featured
      })
    default:
      return state
  }
}
