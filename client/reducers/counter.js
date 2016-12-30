function counter(state = { count: 2 }, action) {
	const count = state.count 
	switch (action.type) {
		case 'increase': 
			return { count: count + 1 }
		default: 
			return state
	}
}

export default counter