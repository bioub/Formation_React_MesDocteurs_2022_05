import { Component } from 'react';
import Clock from './Clock';
import CounterControlled from './CounterControlled';
import CounterUncontrolled from './CounterUncontrolled';
import Hello from './Hello';
import Helloworld from './Helloworld';
import MultiStateButton from './MultiStateButton';
import NestedClicks from './NestedClicks';
import Select from './Select';
import Todos from './todos/Todos';
import UserForm from './UserForm';

// const options = [{label: 'Toto', value: 'Toto'}, {label: 'Titi', value: 'Titi'}, {label: 'Tata', value: 'Tata'}];

class App extends Component {
  // options = [{label: 'Toto', value: 'Toto'}, {label: 'Titi', value: 'Titi'}, {label: 'Tata', value: 'Tata'}];
  state = {
    count: 0,
    name: 'Titi',
  };
  handleIncrement = (oldCount) => {
    this.setState({
      count: oldCount + 1,
    });
  }
  handleSelect = (value) => {
    this.setState({
      name: value,
    });
  }
  render() {
    const { count, name } = this.state;

    return (
      <div className="App">
        <nav className="menu">MyApp</nav>
        {/* React.createElement(Hello, { name: 'Toto', age: 36, isTrainer: true }) */}
        <Hello name={name} age={36} isTrainer />
        <Clock format="HH:mm:ss" />
        <CounterUncontrolled />
        <CounterUncontrolled />
        <CounterUncontrolled />

        <CounterControlled count={count} onIncrement={this.handleIncrement} />
        <CounterControlled count={count} onIncrement={this.handleIncrement} />
        <CounterControlled count={count} onIncrement={this.handleIncrement} />
        <Helloworld />
        <NestedClicks />
        <MultiStateButton items={['Toto', 'Titi', 'Tata']} value={name} onSelect={this.handleSelect} />
        <Select options={['Toto', 'Titi', 'Tata']} value={name} onSelect={this.handleSelect} />
        <UserForm />
        <Todos />
      </div>
    );
  }
}

export default App;
