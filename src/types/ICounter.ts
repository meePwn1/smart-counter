import {
	changeMaxValueAction,
	changeMinValueAction,
} from '../store/actions/counterActions'

export interface ICounter {
	minValue: string
	maxValue: string
}

export enum CounterActionTypes {
	CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE',
	CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE',
}

export type CounterAction =
	| ReturnType<typeof changeMaxValueAction>
	| ReturnType<typeof changeMinValueAction>
