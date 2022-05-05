import rtk from "@reduxjs/toolkit";

// export function increment() {
//   return {
//     type: INCREMENT,
//   }
// }

export const increment = rtk.createAction('INCREMENT');

// export function decrement(){
//   return {
//     type: DECREMENT,
//   }
// }

export const decrement = rtk.createAction('DECREMENT');

// export function setName(payload){
//   return {
//     type: SET_NAME,
//     payload,
//   }
// }

export const setName = rtk.createAction('SET_NAME');

// Action doit avoir une clé type
// Il existe une convention appelée Flux Standard Action (FSA)
// https://github.com/redux-utilities/flux-standard-action
// clé payload