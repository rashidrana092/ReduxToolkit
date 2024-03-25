import {configureStore} from '@reduxjs/toolkit';
import UserReducer from './UserSlice';

const MyStore = configureStore({
  reducer: {
    user: UserReducer, // the name 'user' will be used to access this reducer
  },
});

export default MyStore;
