import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { ThunkAction, thunk } from 'redux-thunk'
import { CounterAction } from '../types/ICounter'
import { RootState, rootReducer } from './reducers'

export const store = createStore(rootReducer, undefined, applyMiddleware(thunk))

export type ActionTypes = CounterAction
export type IThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	ActionTypes
>
