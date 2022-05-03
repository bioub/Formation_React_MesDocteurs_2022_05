import Clock from './Clock';
import CounterControlled from './CounterControlled';
import CounterUncontrolled from './CounterUncontrolled';
import Hello from './Hello';
import Helloworld from './Helloworld';
import MultiStateButton from './MultiStateButton';
import NestedClicks from './NestedClicks';
import Select from './Select';
import UserForm from './UserForm';

class App {
  state = {
    count: 0,
    name: 'Titi',
  };
  handleIncrement = (oldCount) => {
    this.setState({
      count: oldCount + 1,
    });
  }
  render() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    const { count } = this.state;

    return (
      <div className="App">
        <nav className="menu">MyApp</nav>
        {/* React.createElement(Hello, { name: 'Toto', age: 36, isTrainer: true }) */}
        <Hello name="Toto" age={36} isTrainer />
        <Clock format="HH:mm:ss" />
        <CounterUncontrolled />
        <CounterUncontrolled />
        <CounterUncontrolled />

        <CounterControlled count={count} onIncrement={this.handleIncrement} />
        <CounterControlled count={count} onIncrement={this.handleIncrement} />
        <CounterControlled count={count} onIncrement={this.handleIncrement} />
        <Helloworld />
        <NestedClicks />
        <MultiStateButton items={['Toto', 'Titi', 'Tata']} />
        <Select options={options} />
        <UserForm />
      </div>
    );
  }
}

export default App;
