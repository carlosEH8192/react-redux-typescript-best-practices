import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../features/counter';
import { globalReducer } from '../features/global';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    counter: counterReducer,
  },
});
