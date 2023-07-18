import { combineReducers } from 'redux'

import dataLogin from './dataLogin'
import connection from './Connection'

const rootReducer = combineReducers({
  dataLogin,
  connection
})

export default rootReducer
