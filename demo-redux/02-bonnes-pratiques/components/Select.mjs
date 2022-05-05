import { setName } from "../actions.mjs";

class Select {
  constructor(store) {
    this.store = store;
  }
  render(name) {
    console.log('JSX Select', name);
  }
  click() {
    this.store.dispatch(setName('Tata'));
  }
}

export default Select;