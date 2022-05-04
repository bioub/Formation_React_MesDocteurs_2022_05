import { Component } from 'react';
import { Todo } from './Todo';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

type Props = {};
type State = {
  todos: Todo[],
  newTodo: string;
};

class Todos extends Component<Props, State> {
  state: State = {
    todos: [
      {
        id: Math.random(),
        title: 'Acheter du pain',
        completed: false,
      },
      {
        id: Math.random(),
        title: "Terminer l'intro à React",
        completed: true,
      },
    ],
    newTodo: 'Aller au ',
  };
  handleNewTodoChange = (value: string) => {
    this.setState({
      newTodo: value,
    });
  };
  handleAdd = () => {
    const { todos, newTodo } = this.state;
    this.setState({
      todos: [
        ...todos, // anciennes valeurs (SPREAD Operator)
        {
          id: Math.random(),
          title: newTodo,
          completed: false,
        },
      ],
    });
  };
  render() {
    const { todos, newTodo } = this.state;
    return (
      <div className="Todos">
        <TodoForm newTodo={newTodo} onNewTodoChange={this.handleNewTodoChange} onAdd={this.handleAdd} />
        <TodosList items={todos} />
      </div>
    );
  }
}

export default Todos;
