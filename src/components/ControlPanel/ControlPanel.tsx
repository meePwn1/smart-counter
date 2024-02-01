import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import CounterWrapper from '../Layouts/CounterWrapper/CounterWrapper'
import Button from '../UI/button/Button'
import styles from './ControlPanel.module.scss'
import LabeledInput from './LabeledInput/LabeledInput'

interface IProps {
	setMode: (value: boolean) => void
}

const ControlPanel: FC<IProps> = ({ setMode }) => {
	const { minValue, maxValue } = useTypedSelector(state => state.counter)
	const {
		changeMaxValueAction,
		changeMinValueAction,
		setCounterValueToLocalStorage,
	} = useActions()
	const [errorText, setErrorText] = useState('')

	useEffect(() => {
		if (+minValue >= +maxValue) {
			setErrorText('maxValue should be greater than minValue')
		} else {
			setErrorText('')
		}
	}, [minValue, maxValue])

	const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value
		const regex = /^-?(?!-?0$)\d*$|^0$/
		if (regex.test(value)) {
			if (value.startsWith('0') && value.length > 1) {
				value = e.target.value.slice(1)
			}
			changeMaxValueAction(value)
		}
	}

	const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value
		const regex = /^-?(?!-?0$)\d*$|^0$/
		if (regex.test(value)) {
			if (value.startsWith('0') && value.length > 1) {
				value = e.target.value.slice(1)
			}
			changeMinValueAction(value)
		}
	}

	const clickHandler = () => {
		if (!errorText) {
			setMode(false)
			setCounterValueToLocalStorage()
		}
	}
	const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter' || e.code == 'NumpadEnter') {
			clickHandler()
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
						onKeyDown={keyDownHandler}
					/>
					<LabeledInput
						title='minValue'
						value={minValue}
						onChange={changeMinValueHandler}
						error={!!errorText}
						onKeyDown={keyDownHandler}
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
