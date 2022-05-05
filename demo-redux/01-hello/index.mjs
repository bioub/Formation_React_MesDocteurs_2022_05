import { legacy_createStore } from 'redux';

const initialState = {
  count: 0,
  name: 'Toto',
};

// const nextState = reducer(state, action);
// Fonction pure
// - prédictive, le retour est toujours le même à paramètres d'entrées donnés
// ex de fonction prédictive : sum(1, 2) === 3
// ex de fonc non prédictive : getRandomInt(0, 100) === ???
// - ne doit pas modifier ses paramètres d'entrées, donc ne doit pas modifier state ou action
// le but étant de retourner un nouvel objet state (le prochain state)
// fonction immuable (immutable)
// ex de fonction immuable : const nouveauPrenom = prenom.toUppercase();
// ex de fonction muable   : prenoms.push('Romain'); // modifie le tableau prenoms
// - elle ne doit pas avoir de side-effect : appel à des apis externes sync/async (fetch, localStorage, files, setTimeout, setInterval...)

function reducer(state = initialState, action) {
  console.log('reducer', state, action);

  if (action.type === 'increment') {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === 'setName') {
    return {
      ...state,
      name: action.name,
    };
  }

  return state;
}

/** @type {import('redux').Store} */
const store = legacy_createStore(reducer);

console.log('state initial', store.getState());

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'setName', name: 'Titi' });

// document.dispatchEvent(new Event('my-event'));
// document.addEventListener('my-event', () => {});
