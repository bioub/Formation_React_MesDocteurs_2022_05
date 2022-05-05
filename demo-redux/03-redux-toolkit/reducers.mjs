import { decrement, increment, setName } from './actions.mjs';
import rtk from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  name: 'Toto',
};

// function countReducer(state = initialState.count, action) {
//   if (action.type === increment.type) {
//     return state + 1
//   }

//   if (action.type === decrement.type) {
//     return state - 1;
//   }

//   return state;
// }

const countReducer = rtk.createReducer(initialState.count, (builder) => {
  builder
    .addCase(increment, (state, action) => state + 1)
    .addCase(decrement, (state, action) => state - 1);
});

// function nameReducer(state = initialState.name, action) {
//   if (action.type === setName.type) {
//     return action.payload;
//   }

//   return state;
// }

const nameReducer = rtk.createReducer(initialState.name, (builder) => {
  builder.addCase(setName, (state, action) => action.payload);
});

// export function reducer(state = initialState, action) {
//   console.log('reducer', state, action);

//   if (action.type === INCREMENT) {
//     return {
//       ...state,
//       count: countReducer(state.count, action),
//     };
//   }

//   if (action.type === DECREMENT) {
//     return {
//       ...state,
//       count: countReducer(state.count, action),
//     };
//   }

//   if (action.type === SET_NAME) {
//     return {
//       ...state,
//       name: nameReducer(state.name, action),
//     };
//   }

//   return state;
// }

// Pour générer le reducer global à partir des autres

// Avec le configureStore de RTK plus besoin d'appeler combineReducers
export const reducer = {
  count: countReducer,
  name: nameReducer,
};
