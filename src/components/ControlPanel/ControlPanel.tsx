import { ChangeEvent, useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import CounterWrapper from '../Layouts/CounterWrapper/CounterWrapper'
import Button from '../UI/button/Button'
import styles from './ControlPanel.module.scss'
import LabeledInput from './LabeledInput/LabeledInput'

const ControlPanel = () => {
	const { minValue, maxValue } = useTypedSelector(state => state.counter)
	const { changeSetModeAction, changeMaxValueAction, changeMinValueAction } =
		useActions()
	const [errorText, setErrorText] = useState('')

	useEffect(() => {
		if (minValue >= maxValue) {
			setErrorText('maxValue should be greater than minValue')
		} else {
			setErrorText('')
		}
	}, [minValue, maxValue])

	const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)
		changeMaxValueAction(value)
	}

	const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)
		changeMinValueAction(value)
	}

	const clickHandler = () => {
		if (!errorText) {
			changeSetModeAction(false)
		}
	}
	return (
		<>
			<CounterWrapper>
				<div className={styles.control}>
					<LabeledInput
						title='maxValue'
						value={maxValue}
						onChange={changeMaxValueHandler}
						error={!!errorText}
					/>
					<LabeledInput
						title='minValue'
						value={minValue}
						onChange={changeMinValueHandler}
						error={!!errorText}
					/>
					<div className={styles.error}>{errorText}</div>
				</div>
			</CounterWrapper>
			<div className={styles.setting}>
				<Button disabled={!!errorText} onClick={clickHandler}>
					Set
				</Button>
			</div>
		</>
	)
}

export default ControlPanel
