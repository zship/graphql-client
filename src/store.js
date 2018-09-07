import { createStore, applyMiddleware } from 'redux'
import reducer from '~/reducer'
import thunkMiddleware from 'redux-thunk'

const store = applyMiddleware(thunkMiddleware)(createStore)(reducer)
export default store
