import { useState } from "react";
import CounterUncontrolledHook from "./CounterUncontrolledHook";
import Hello from "./Hello";
import Select from "./Select";
import Todos from "./todos/Todos";

function App() {
  const names = ['Toto', 'Titi', 'Tata'];
  const [name, setName] = useState('Titi');
  return (
    <div className="App">
      <Hello name={name} />
      <Todos />
      <CounterUncontrolledHook />
      <CounterUncontrolledHook />
      <CounterUncontrolledHook />
      <Select options={names} value={name} onSelect={(n) => setName(n)} />
    </div>
  );
}

export default App;
