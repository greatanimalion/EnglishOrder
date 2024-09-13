import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './initValue';
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});