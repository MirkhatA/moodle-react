import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
