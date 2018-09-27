import { createStore, applyMiddleware ,combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'

import musicPlayer from './testReducer';
import Login from './loginReducer';

const middlewares = [
  thunkMiddleware,
]

const rootReducer = combineReducers({
  musicPlayer,
  Login,
});

function configStore () {
  const store = createStore( rootReducer, applyMiddleware(...middlewares))
  return store
}

export default configStore;