import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { countReducer, nameReducer } from './reducers';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todos/todosSlice';

export const store = configureStore({
  reducer: { // combineReducers
    counter: counterReducer,
    count: countReducer,
    name: nameReducer,
    todos: todosReducer,
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
