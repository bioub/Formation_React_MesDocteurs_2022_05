import lodash from 'lodash';

let state = {
  items: (new Array(10_000_000)).fill({}).map(t => ({
    id: Math.random(),
    completed: Math.random() >= 0.5,
  }))
};

function countActiveTodosSelector(rootState) {
  return rootState.items.filter((t) => !t.completed).length;
}

const countActiveTodosSelectorMemo = lodash.memoize(countActiveTodosSelector);

console.time('countActiveTodosSelector');
console.log(countActiveTodosSelectorMemo(state) + ' todos active');
console.timeEnd('countActiveTodosSelector');

console.time('countActiveTodosSelector');
console.log(countActiveTodosSelectorMemo(state) + ' todos active');
console.timeEnd('countActiveTodosSelector');

// state.items.push({id: Math.random(), completed: false});
state = {
  ...state,
  items: [...state.items, {id: Math.random(), completed: false}]
}

console.time('countActiveTodosSelector');
console.log(countActiveTodosSelectorMemo(state) + ' todos active');
console.timeEnd('countActiveTodosSelector');

console.time('countActiveTodosSelector');
console.log(countActiveTodosSelectorMemo(state) + ' todos active');
console.timeEnd('countActiveTodosSelector');