import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { countReducer } from './reducers';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: { // combineReducers
    counter: counterReducer,
    count: countReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
