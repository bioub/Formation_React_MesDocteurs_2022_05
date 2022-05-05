import { useState } from 'react';

function CounterUncontrolledHook() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button className="CounterUncontrolledHook" onClick={handleClick}>{count}</button>;
}


export default CounterUncontrolledHook;

