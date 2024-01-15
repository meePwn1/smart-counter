import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counterActions'

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(counterActions, dispatch)
}
