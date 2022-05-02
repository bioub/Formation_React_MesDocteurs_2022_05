import Clock from "./Clock";
import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      {/* React.createElement(Hello, { name: 'Toto', age: 36, isTrainer: true }) */}
      <Hello name="Toto" age={36} isTrainer />
      <Clock format="HH:mm:ss" />
      <Counter />
    </div>
  );
}

export default App;
