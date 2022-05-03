import Clock from "./Clock";
import Counter from "./Counter";
import Hello from "./Hello";
import Helloworld from "./Helloworld";
import MultiStateButton from "./MultiStateButton";
import NestedClicks from "./NestedClicks";

function App() {
  return (
    <div className="App">
      {/* React.createElement(Hello, { name: 'Toto', age: 36, isTrainer: true }) */}
      <Hello name="Toto" age={36} isTrainer />
      <Clock format="HH:mm:ss" />
      <Counter />
      <Helloworld />
      <NestedClicks />
      <MultiStateButton items={['Toto', 'Titi', 'Tata']} />
    </div>
  );
}

export default App;
