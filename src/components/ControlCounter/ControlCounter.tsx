import { ChangeEvent, FC, useState } from 'react'
import { CounterLimitsType } from '../Counter/Counter'
import Button from '../ui/button/Button'
import style from './ControlCounter.module.scss'
import Label from './Label/Label'

interface ControlCounterProps {
	status: boolean
	сounterLimits: CounterLimitsType
	showControlTable: boolean
	setShowControlTable: (value: boolean) => void
	setStartValue: (value: number) => void
	setMaxValue: (value: number) => void
	controlStatus: (value: boolean) => void
}

const ControlCounter: FC<ControlCounterProps> = props => {
	const [startValueError, setStartValueError] = useState<boolean>(false)
	const [maxValueError, setMaxValueError] = useState<boolean>(false)

	const handleSetStartValue = (e: ChangeEvent<HTMLInputElement>) => {
		const value = +e.target.value
		props.setStartValue(value)
		props.controlStatus(true)

		if (value > -1) {
			setStartValueError(false)
			if (value < props.сounterLimits.maxValue) {
				setMaxValueError(false)
				setStartValueError(false)
			} else {
				setMaxValueError(true)
				setStartValueError(true)
			}
		} else {
			setStartValueError(true)
		}
	}

	const handleSetMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
		const value = +e.target.value
		props.setMaxValue(value)
		props.controlStatus(true)

		if (value <= props.сounterLimits.startValue) {
			setMaxValueError(true)
			setStartValueError(true)
		} else {
			setMaxValueError(false)
			setStartValueError(false)
		}
	}
	const handleClick = () => {
		props.controlStatus(false)
	}

	return (
		<>
			<div className={style.table}>
				<Label
					htmlFor='max'
					title='max value'
					setValue={handleSetMaxValue}
					value={props.сounterLimits.maxValue}
					hasError={maxValueError}
				/>
				<Label
					htmlFor='min'
					title='start value'
					setValue={handleSetStartValue}
					value={props.сounterLimits.startValue}
					hasError={startValueError}
				/>
			</div>
			<div className={style.btns}>
				<Button disabled={!props.status || startValueError || maxValueError} onClick={handleClick}>
					Set
				</Button>
				<Button onClick={() => props.setShowControlTable(!props.showControlTable)}>Hide</Button>
			</div>
		</>
	)
}

export default ControlCounter
