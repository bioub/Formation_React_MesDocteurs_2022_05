import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Todo } from './Todo';
import TodoForm from './TodoForm';
import TodosList from './TodosList';
import { todosSelector } from './todosSelectors';
import { addItem, changeInput, deleteItem } from './todosSlice';

function Todos() {
  const { newTodo, items } = useAppSelector(todosSelector);
  const dispatch = useAppDispatch();

  function handleNewTodoChange(value: string) {
    dispatch(changeInput(value));
  }

  function handleAdd() {
    dispatch(addItem(newTodo));
  }

  function handleDelete(todo: Todo) {
    dispatch(deleteItem(todo));
  }

  return (
    <div className="Todos">
      <TodoForm newTodo={newTodo} onNewTodoChange={handleNewTodoChange} onAdd={handleAdd} />
      <TodosList items={items} onDelete={handleDelete} />
    </div>
  );
}

export default Todos;
