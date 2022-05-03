import { Component } from 'react';

class CounterUncontrolled extends Component {
  state = {
    count: 0,
  };
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  handleClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }
  // handleClick() {
  //   console.log('click');
  //   console.log(this);
  // }
  render() {
    const { count } = this.state;
    return <button className="CounterUncontrolled" onClick={this.handleClick}>{count}</button>;
  }
}


// écouter via l'attribut
// <button onclick="handleClick()"></button>

// écouter via la propriété
// buttonEl.onclick = () => {
//  handleClick();
//};

// écouter via addEventListener
// buttonEl.addEventListener('click', () => {
//   handleClick()
// });

export default CounterUncontrolled;
