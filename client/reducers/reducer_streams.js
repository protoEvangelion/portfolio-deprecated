import { FETCH_STREAMS, FETCH_FREE } from '../actions/fetchStreams'

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_STREAMS:
      return Object.assign({}, state, {
        featured: action.payload.data.featured
      })
    case FETCH_FREE:
      return Object.assign({}, state, {
        free: [action.payload.data]
      })
    default:
      return state
  }
}
