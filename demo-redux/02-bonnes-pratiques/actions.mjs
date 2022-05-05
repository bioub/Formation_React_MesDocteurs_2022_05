import { DECREMENT, INCREMENT, SET_NAME } from "./constants.mjs";

export function increment(){
  return {
    type: INCREMENT,
  }
}

export function decrement(){
  return {
    type: DECREMENT,
  }
}

export function setName(payload){
  return {
    type: SET_NAME,
    payload,
  }
}

// Action doit avoir une clé type
// Il existe une convention appelée Flux Standard Action (FSA)
// https://github.com/redux-utilities/flux-standard-action
// clé payload