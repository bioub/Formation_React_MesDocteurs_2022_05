import { increment } from "../slices.mjs";


class Counter {
  constructor(store) {
    this.store = store;
  }
  render(count) {
    console.log('JSX Counter', count);
  }
  click() {
    this.store.dispatch(increment());
  }
}

export default Counter;