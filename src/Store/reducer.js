import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import container from '../containers/RootContainer/reducer.js'

export default combineReducers({
  routing: routerReducer,
  container
})
