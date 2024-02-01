import {
	CounterAction,
	CounterActionTypes,
	ICounter,
} from '../../types/ICounter'

const initialState: ICounter = {
	minValue: '0',
	maxValue: '1',
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

		default:
			return state
	}
}
