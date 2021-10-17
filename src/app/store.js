import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filterData: filterReducer
  },
});
