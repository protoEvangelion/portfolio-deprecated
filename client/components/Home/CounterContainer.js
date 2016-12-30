import { connect } from 'react-redux'
import Home from './Home'
import increaseAction from '../../actions'

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    value: 0
  }
}

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const CounterContainer = connect(mapStateToProps)(Home)

export default CounterContainer
