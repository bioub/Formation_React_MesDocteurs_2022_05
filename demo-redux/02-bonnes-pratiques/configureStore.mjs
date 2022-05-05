import { legacy_createStore } from 'redux';
import { reducer } from './reducers.mjs';

export function configureStore() {
  /** @type {import('redux').Store} */
  const store = legacy_createStore(reducer);

  // ajouter des plugins à terme

  return store;
}