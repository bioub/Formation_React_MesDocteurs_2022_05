import { RootState } from './store';

export function countSelector(state: RootState) {
  return state.count;
}
