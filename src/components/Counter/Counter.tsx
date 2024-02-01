import { useState } from 'react'
import ControlPanel from '../ControlPanel/ControlPanel'
import DisplayPanel from '../DisplayPanel/DisplayPanel'

const Counter = () => {
	const [setMode, setSetMode] = useState(false)

	return (
		<div className='counter'>
			{setMode ? (
				<ControlPanel setMode={setSetMode} />
			) : (
				<DisplayPanel setMode={setSetMode} />
			)}
		</div>
	)
}

export default Counter
