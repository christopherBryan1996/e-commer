import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../redux'

let store= createStore(reducer,applyMiddleware(thunk))

export default store