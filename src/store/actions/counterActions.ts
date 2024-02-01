import { CounterActionTypes } from '../../types/ICounter'
import { IThunk } from '../store'

export const changeMaxValueAction = (value: string) => {
	return {
		type: CounterActionTypes.CHANGE_MAX_VALUE,
		value,
	} as const
}

export const changeMinValueAction = (value: string) => {
	return {
		type: CounterActionTypes.CHANGE_MIN_VALUE,
		value,
	} as const
}

export const getValueFromLocalStorageThunk = (): IThunk => async dispatch => {
	try {
		const dataAsString = await localStorage.getItem('counter')
		if (dataAsString) {
			const data: { min: string; max: string } = JSON.parse(dataAsString)
			dispatch(changeMinValueAction(data.min))
			dispatch(changeMaxValueAction(data.max))
		}
	} catch (error) {
		alert(error)
	}
}

export const setCounterValueToLocalStorage =
	(): IThunk => async (_, getState) => {
		try {
			const data = {
				min: getState().counter.minValue,
				max: getState().counter.maxValue,
			}
			localStorage.setItem('counter', JSON.stringify(data))
		} catch (error) {
			alert(error)
		}
	}
