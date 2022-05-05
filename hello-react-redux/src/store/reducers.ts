import { createReducer } from "@reduxjs/toolkit";
import { increment } from "./actions";

const initialState = {
  count: 0,
};

export const countReducer = createReducer(initialState.count, (builder) => {
  builder.addCase(increment, (state, action) => state + 1);
});