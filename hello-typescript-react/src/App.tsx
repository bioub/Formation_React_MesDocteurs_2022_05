import CounterUncontrolledHook from "./CounterUncontrolledHook";
import Hello from "./Hello";
import Todos from "./todos/Todos";

function App() {
  return (
    <div className="App">
      <Hello  />
      <Todos />
      <CounterUncontrolledHook />
      <CounterUncontrolledHook />
      <CounterUncontrolledHook />
    </div>
  );
}

export default App;
