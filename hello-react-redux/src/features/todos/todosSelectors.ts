import { RootState } from "../../store/store";

export function todosSelector(rootState: RootState) {
  return rootState.todos;
}

export function todosNewTodoSelector(rootState: RootState) {
  return todosSelector(rootState).newTodo;
}

export function todosItemsSelector(rootState: RootState) {
  return todosSelector(rootState).items;
}