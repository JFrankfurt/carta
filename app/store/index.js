import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../reducers/root'

export const configureStore = (preLoadedState = {}) =>
  createStore(
    rootReducer,
    preLoadedState,
    composeWithDevTools(
      applyMiddleware() // apply middleware here (store, next, action) => next(action)
    )
  )
