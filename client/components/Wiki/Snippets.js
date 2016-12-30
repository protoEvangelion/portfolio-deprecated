import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increaseAction } from '../../actions'
import { WikiArticle } from './WikiArticle'

function mapStateToProps(state) {
	return {
		value: state.count
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncreaseClick: () => dispatch(increaseAction)
	}
}

export const Snippets = connect(mapStateToProps, mapDispatchToProps)(WikiArticle)

