import { useState } from 'react';

// class CounterUncontrolled extends Component {
//   state = {
//     step: 10,
//     count: 0,
//   };
//   handleClick = () => {
//     const { count, step } = this.state;
//     this.setState({
//       count: count + step,
//     });
//   }
//   render() {
//     const { count } = this.state;
//     return <button className="CounterUncontrolled" onClick={this.handleClick}>{count}</button>;
//   }
// }

// le state d'un class component est un objet
// {
//   step: 10,
//   count: 0,
// }

// le state d'un function component qui utilise useState est un tableau
// [
//   10, // premier appel
//   0, // 2e appel
// ]

function CounterUncontrolledHook() {
  const [step, setStep] = useState(10);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + step);
  }

  return <button className="CounterUncontrolledHook" onClick={handleClick}>{count}</button>;
}


export default CounterUncontrolledHook;
