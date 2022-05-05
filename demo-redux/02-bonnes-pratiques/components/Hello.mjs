class Hello {
  constructor(store) {
    this.store = store;
  }
  render(name) {
    console.log('JSX Hello', name);
  }
}

export default Hello;