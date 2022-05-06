import { combineReducers } from "redux";
import { DECREMENT, INCREMENT, SET_NAME } from "./constants.mjs";

const initialState = {
  count: 0,
  name: 'Toto',
};

function countReducer(state = initialState.count, action) {
  if (action.type === INCREMENT) {
    return state + 1
  }

  if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
}

function nameReducer(state = initialState.name, action) {
  if (action.type === SET_NAME) {
    return action.payload;
  }

  return state;
}

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

export const reducer = combineReducers({
  count: countReducer,
  name: nameReducer,
  // todos: combineReducers({
  //   items: itemsReducer,
  //   newTodo: newTodoReducer
  // })
});