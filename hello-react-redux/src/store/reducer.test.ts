import { nameReducer } from "./reducers"

test('setName should update name', () => {
  const nextState = nameReducer('Toto', { type: 'setName', payload: 'Titi' });
  expect(nextState).toEqual('Titi');
})