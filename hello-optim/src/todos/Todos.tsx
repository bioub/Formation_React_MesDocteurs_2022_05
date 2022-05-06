import { Component, useCallback, useMemo, useState } from 'react';
import { Todo } from './Todo';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

// type Props = {};
// type State = {
//   todos: Todo[],
//   newTodo: string;
// };

// class Todos extends Component<Props, State> {
//   state: State = {
//     todos: [
//       {
//         id: Math.random(),
//         title: 'Acheter du pain',
//         completed: false,
//       },
//       {
//         id: Math.random(),
//         title: "Terminer l'intro à React",
//         completed: true,
//       },
//     ],
//     newTodo: 'Aller au ',
//   };
//   handleNewTodoChange = (value: string) => {
//     this.setState({
//       newTodo: value,
//     });
//   };
//   handleAdd = () => {
//     const { todos, newTodo } = this.state;
//     this.setState({
//       todos: [
//         ...todos, // anciennes valeurs (SPREAD Operator)
//         {
//           id: Math.random(),
//           title: newTodo,
//           completed: false,
//         },
//       ],
//     });
//   };
//   render() {
//     const { todos, newTodo } = this.state;
//     return (
//       <div className="Todos">
//         <TodoForm newTodo={newTodo} onNewTodoChange={this.handleNewTodoChange} onAdd={this.handleAdd} />
//         <TodosList items={todos} />
//       </div>
//     );
//   }
// }

function Todos() {
  console.log('Todos');
  
  const [newTodo, setNewTodo] = useState('Aller au ');
  const [todos, setTodos] = useState<Todo[]>((new Array(5000)).fill({}).map(t => ({
    id: Math.random(),
    title: 'ABC',
    completed: Math.random() >= 0.5,
  })));

  function handleNewTodoChange(value: string) {
    setNewTodo(value);
  }

  function handleAdd() {
    setTodos([
      ...todos, // anciennes valeurs (SPREAD Operator)
      {
        id: Math.random(),
        title: newTodo,
        completed: false,
      },
    ]);
  }

  // const handleDeleteMemo = useMemo(() => function handleDelete(todo: Todo) {
  //   setTodos(todos.filter((t) => t.id !== todo.id));
  // }, [todos]);

  const handleDeleteMemo = useCallback(function handleDelete(todo: Todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }, [todos]);

  return (
    <div className="Todos">
      <TodoForm newTodo={newTodo} onNewTodoChange={handleNewTodoChange} onAdd={handleAdd} />
      <TodosList items={todos} onDelete={handleDeleteMemo} />
    </div>
  );
}

export default Todos;
