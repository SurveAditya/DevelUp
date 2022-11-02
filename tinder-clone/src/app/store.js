import { configureStore } from '@reduxjs/toolkit';
import addReducer from '../redux/addSlice';

export const store = configureStore({
  reducer: {
    add: addReducer,

  },
});
