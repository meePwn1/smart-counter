import {
	ChangeSetModeAction,
	CounterActionTypes,
	DecrementCounterAction,
	IncrementCounterAction,
} from '../reducers/counterReducer'

export const changeMaxValueAction = (value: number): IncrementCounterAction => {
	return {
		type: CounterActionTypes.CHANGE_MAX_VALUE,
		value,
	}
}

export const changeMinValueAction = (value: number): DecrementCounterAction => {
	return {
		type: CounterActionTypes.CHANGE_MIN_VALUE,
		value,
	}
}

export const changeSetModeAction = (value: boolean): ChangeSetModeAction => {
	return {
		type: CounterActionTypes.CHANGE_SET_MODE,
		value,
	}
}
