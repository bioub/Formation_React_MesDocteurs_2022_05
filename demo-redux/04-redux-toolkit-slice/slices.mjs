import rtk from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  name: 'Toto',
};

const slice = rtk.createSlice({
  name: 'main',
  initialState,
  reducers: {
    increment: (state, action) => {
      // immer va transformer ce code en (déjà le cas avec createReducer)
      // { ...state, count: state.count + 1 }
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
    setName: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const reducer = slice.reducer;
export const { increment, decrement, setName } = slice.actions;