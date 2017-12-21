import { TOGGLE_NAV } from './action'

const navReducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return { isOpen: !state.isOpen }
    default:
      return state
  }
}

export default navReducer
