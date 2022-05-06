import { Routes, Route, Link } from "react-router-dom";
import HomePage from './containers/HomePage';
import { Counter } from "./features/counter/Counter";
import Todos from './features/todos/Todos';
import Users from './features/users/Users';
import UsersDetails from "./features/users/UsersDetails";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/users">Users</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />}>
          <Route path="/users/:id" element={<UsersDetails />} />
        </Route>
        <Route path="/todos" element={<Todos />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
