function TodoForm({ newTodo, onNewTodoChange, onAdd }) {

  function handleSubmit(e) {
    e.preventDefault();
    onAdd();
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={(e) => onNewTodoChange(e.target.value)} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
