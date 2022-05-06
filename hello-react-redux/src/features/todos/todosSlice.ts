import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './Todo';

type TodosState = {
  items: Todo[];
  newTodo: string;
}

const initialState: TodosState = {
  items: [
    {
      id: nanoid(),
      title: 'Acheter du pain',
      completed: false,
    },
    {
      id: nanoid(),
      title: "Terminer l'intro à React",
      completed: true,
    },
  ],
  newTodo: 'Aller au ',
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addItem: {
      reducer(state, action: PayloadAction<Todo>) {
        state.items.push(action.payload);
      },
      prepare(title: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          }
        }
      }
    },
    deleteItem(state, action: PayloadAction<Todo>) {
      const index = state.items.findIndex((t) => t.id === action.payload.id);
      state.items.splice(index, 1);
    },
    changeInput(state, action: PayloadAction<string>) {
      state.newTodo = action.payload;
    } 
  }
});


export const { addItem, deleteItem, changeInput } = slice.actions;

export default slice.reducer;