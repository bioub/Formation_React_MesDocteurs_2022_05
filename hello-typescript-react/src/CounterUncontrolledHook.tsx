import { useState } from 'react';

function CounterUncontrolledHook() {
  const [step, setStep] = useState(10);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + step);
  }

  return <button className="CounterUncontrolledHook" onClick={handleClick}>{count}</button>;
}


export default CounterUncontrolledHook;

