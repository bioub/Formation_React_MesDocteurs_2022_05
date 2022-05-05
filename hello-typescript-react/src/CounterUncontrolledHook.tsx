import { useState } from 'react';

function Counter() {
  const [step, setStep] = useState(10);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + step);
  }

  return <button className="Counter" onClick={handleClick}>{count}</button>;
}


export default Counter;

