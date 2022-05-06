import { countSelector, nameSelector } from "../selectors.mjs";

class App {
  constructor(store) {
    this.store = store;
  }
  render(counter, select, msb, hello) {
    const state = this.store.getState();
    const count = countSelector(state);
    const name = nameSelector(state);

    counter.render(count);
    select.render(name);
    msb.render(name);
    hello.render(name);
  }
}

export default App;