import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices';

const MyStore = configureStore({
  reducer: rootReducer,
});

export default MyStore;
