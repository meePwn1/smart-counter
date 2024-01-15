import { useTypedSelector } from '../../hooks/useTypedSelector'
import ControlPanel from '../ControlPanel/ControlPanel'
import DisplayPanel from '../Display/DisplayPanel'

const Counter = () => {
	const setMode = useTypedSelector(state => state.counter.setMode)

	return (
		<div className='counter'>
			{setMode ? <ControlPanel /> : <DisplayPanel />}
		</div>
	)
}

export default Counter
