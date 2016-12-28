
const initialState = {}

const wikiSnippets = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_SNIPPETS':
			return state
		default: 
			return state
	}
}

export default wikiSnippets