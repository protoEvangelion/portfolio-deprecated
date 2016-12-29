import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { snippets } from '../../actions/actionCreators'
import WikiArticle from './WikiArticle'

function mapStateToProps(state) {
	return {
		snippets: state.wikiSnippets
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(snippets, dispatch)
}

const Snippets = connect(mapStateToProps, mapDispatchToProps)(WikiArticle)

export default Snippets
