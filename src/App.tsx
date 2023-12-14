import { useState } from 'react'
import './App.scss'
import ControlCounter from './components/ControlCounter/ControlCounter'
import { Counter } from './components/Counter/Counter'
import { useLocalStorage } from './components/hooks/useLocalStorage'

const App = () => {
	const [startValue, setStartValue] = useLocalStorage('minValue', 0)
	const [maxValue, setMaxValue] = useLocalStorage('maxValue', 5)
	const [controlStatus, setControlStatus] = useState<boolean>(false) // isValuesChanged
	const [showControlTable, setShowControlTable] = useState<boolean>(false)

	return (
		<div className='App'>
			<div className='counter'>
				{showControlTable ? (
					<ControlCounter
						сounterLimits={{ startValue, maxValue }}
						setStartValue={setStartValue}
						setMaxValue={setMaxValue}
						status={controlStatus}
						controlStatus={setControlStatus}
						setShowControlTable={setShowControlTable}
						showControlTable={showControlTable}
					/>
				) : (
					<Counter
						сounterLimits={{ startValue, maxValue }}
						controlStatus={controlStatus}
						setShowControlTable={setShowControlTable}
						showControlTable={showControlTable}
					/>
				)}
			</div>
		</div>
	)
}

export default App
