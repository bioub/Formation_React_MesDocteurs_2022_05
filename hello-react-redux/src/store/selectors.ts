import { RootState } from './store';

export function countSelector(state: RootState) {
  return state.count;
}


export function nameSelector(state: RootState) {
  return state.name;
}
