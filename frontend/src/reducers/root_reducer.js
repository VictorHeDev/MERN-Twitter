// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import sessionReducer from './session_reducer.js';
import errors from './errors_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors,
});

export default RootReducer;
