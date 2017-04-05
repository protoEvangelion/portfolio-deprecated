import { OPEN_NAVBAR } from './actions'

const navReducer = (state = { opened: false }, action) => {
  switch (action.type) {
    case OPEN_NAVBAR:
      return { opened: !state.opened }
    default:
      return state
  }
}

export default navReducer
