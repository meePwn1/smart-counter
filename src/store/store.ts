import throttle from 'lodash.throttle'
import { legacy_createStore as createStore } from 'redux'
import { loadStateFromLS, saveStateToLS } from '../utils/localStorageRedux'
import { rootReducer } from './reducers'

const persistedState = loadStateFromLS()

export const store = createStore(rootReducer, persistedState)

store.subscribe(
	throttle(() => {
		saveStateToLS(store.getState())
	}, 1000)
)
