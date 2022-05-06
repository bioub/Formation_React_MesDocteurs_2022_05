import { createReducer } from "@reduxjs/toolkit";
import { increment, setName } from "./actions";

const initialState = {
  count: 0,
  name: 'Toto',
};

export const countReducer = createReducer(initialState.count, (builder) => {
  builder.addCase(increment, (state, action) => state + 1);
});


export const nameReducer = createReducer(initialState.name, (builder) => {
  builder.addCase(setName, (state, action) => action.payload);
});