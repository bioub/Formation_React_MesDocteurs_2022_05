import Clock from "./Clock";
import Counter from "./Counter";
import Hello from "./Hello";
import Helloworld from "./Helloworld";
import MultiStateButton from "./MultiStateButton";
import NestedClicks from "./NestedClicks";
import Select from "./Select";

function App() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className="App">
      <nav className="menu">
        MyApp
      </nav>
      {/* React.createElement(Hello, { name: 'Toto', age: 36, isTrainer: true }) */}
      <Hello name="Toto" age={36} isTrainer />
      <Clock format="HH:mm:ss" />
      <Counter />
      <Helloworld />
      <NestedClicks />
      <MultiStateButton items={['Toto', 'Titi', 'Tata']} />
      <Select options={options} />
    </div>
  );
}

export default App;
