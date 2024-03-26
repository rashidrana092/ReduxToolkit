import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import counterReducer from './counterSlice';
import uniqueIdReducer from './uniqueIdSlice';

const rootReducer = combineReducers({
  user: userReducer, // the name 'user' will be used to access this reducer
  counter: counterReducer,
  id: uniqueIdReducer,
});

export default rootReducer;
