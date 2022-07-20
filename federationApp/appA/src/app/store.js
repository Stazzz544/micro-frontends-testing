import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/couterSlice';
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
