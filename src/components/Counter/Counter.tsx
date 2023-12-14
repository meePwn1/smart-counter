import { FC, useEffect, useState } from 'react'
import Button from '../ui/button/Button'
import style from './Counter.module.scss'
import Table from './Table/Table'

export interface CounterLimitsType {
	startValue: number
	maxValue: number
}

interface CounterProps {
	сounterLimits: CounterLimitsType
	controlStatus: boolean
	showControlTable: boolean
	setShowControlTable: (value: boolean) => void
}

export const Counter: FC<CounterProps> = ({ сounterLimits, controlStatus, showControlTable, setShowControlTable }) => {
	const [count, setCount] = useState<number>(сounterLimits.startValue)
	useEffect(() => {
		setCount(сounterLimits.startValue)
	}, [сounterLimits.startValue])

	const handlerIncrement = () => {
		if (count < сounterLimits.maxValue) {
			setCount(count + 1)
		}
	}

	const handlerReset = () => {
		setCount(сounterLimits.startValue)
	}

	return (
		<>
			<Table
				count={controlStatus ? "enter values and press 'set' " : count}
				error={сounterLimits.startValue < 0 || сounterLimits.startValue >= сounterLimits.maxValue}
				maxValue={сounterLimits.maxValue}
			/>
			<div className={style.btns}>
				<Button disabled={count === сounterLimits.maxValue || controlStatus} onClick={handlerIncrement}>
					increment
				</Button>
				<Button disabled={count === сounterLimits.startValue || controlStatus} onClick={handlerReset}>
					reset
				</Button>
				<Button onClick={() => setShowControlTable(!showControlTable)}>Set</Button>
			</div>
		</>
	)
}
