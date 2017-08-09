import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// local modules
import rootReducer from './reducers'

export default function configureStore(preloadedState) {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk))
}
