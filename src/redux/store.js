import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const middlewares = [
  thunkMiddleware,
]

function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}

const store = configStore();

export default store;