import {configureStore} from '@reduxjs/toolkit';
import UserReducer from './slices/UserSlice';
import counterReducer from './slices/counterSlice';

const MyStore = configureStore({
  reducer: {
    user: UserReducer, // the name 'user' will be used to access this reducer
    counter: counterReducer,
  },
});

export default MyStore;
