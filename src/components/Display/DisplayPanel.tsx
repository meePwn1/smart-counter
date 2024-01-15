import { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import CounterWrapper from '../Layouts/CounterWrapper/CounterWrapper'
import Button from '../UI/button/Button'
import styles from './DisplayPanel.module.scss'

const DisplayPanel = () => {
	const { minValue, maxValue } = useTypedSelector(state => state.counter)
	const [counter, setCounter] = useState(minValue)

	const { changeSetModeAction } = useActions()

	const incrementHandler = () => {
		if (maxValue > counter) {
			setCounter(prev => prev + 1)
		}
	}

	const decrementHandler = () => {
		if (counter > minValue) {
			setCounter(prev => prev - 1)
		}
	}

	const changeSetMode = () => {
		changeSetModeAction(true)
	}

	const resetHandler = () => {
		setCounter(minValue)
	}

	return (
		<>
			<CounterWrapper>
				<div className={styles.display}>
					<Button onClick={decrementHandler} rounded={true} actionType='dec'>
						-
					</Button>
					<span>{counter}</span>
					<Button onClick={incrementHandler} rounded={true} actionType='inc'>
						+
					</Button>
				</div>
			</CounterWrapper>
			<div className={styles.setting}>
				<Button onClick={resetHandler}>Reset</Button>
				<Button onClick={changeSetMode}>Settings</Button>
			</div>
		</>
	)
}

export default DisplayPanel
