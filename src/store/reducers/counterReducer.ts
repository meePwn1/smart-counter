export interface ICounter {
	minValue: number
	maxValue: number
	setMode: boolean
}

export enum CounterActionTypes {
	CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE',
	CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE',
	CHANGE_SET_MODE = 'CHANGE_SET_MODE',
}

export interface IncrementCounterAction {
	type: CounterActionTypes.CHANGE_MAX_VALUE
	value: number
}

export interface DecrementCounterAction {
	type: CounterActionTypes.CHANGE_MIN_VALUE
	value: number
}

export interface ChangeSetModeAction {
	type: CounterActionTypes.CHANGE_SET_MODE
	value: boolean
}

type CounterAction =
	| IncrementCounterAction
	| DecrementCounterAction
	| ChangeSetModeAction

const initialState: ICounter = {
	minValue: 0,
	maxValue: 1,
	setMode: false,
}

export const counterReducer = (
	state = initialState,
	action: CounterAction
): ICounter => {
	switch (action.type) {
		case CounterActionTypes.CHANGE_MAX_VALUE:
			return { ...state, maxValue: action.value }
		case CounterActionTypes.CHANGE_MIN_VALUE:
			return { ...state, minValue: action.value }
		case CounterActionTypes.CHANGE_SET_MODE:
			return {
				...state,
				setMode: action.value,
			}
		default:
			return state
	}
}
