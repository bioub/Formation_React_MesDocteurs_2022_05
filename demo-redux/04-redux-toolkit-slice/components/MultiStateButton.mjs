import { setName } from "../slices.mjs";

class MultiStateButton {
  constructor(store) {
    this.store = store;
  }
  render(name) {
    console.log('JSX MultiStateButton', name);
  }
  click() {
    this.store.dispatch(setName('Titi'));
  }
}

export default MultiStateButton;