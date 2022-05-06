import HomePage from './containers/HomePage';
import Todos from './features/todos/Todos';
import Users from './features/users/Users';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Todos />
      <Users />
    </div>
  );
}

export default App;
