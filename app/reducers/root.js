import { combineReducers } from 'redux'

const test = (s = {}, a) => ({ ...s, a })

export const rootReducer = combineReducers({
  test,
})
