import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './Todo';
import { fetchTodos } from './todoAPI';

enum TodosStatus {
  idle = 'idle',
  pending = 'pending',
  error = 'error',
}

type TodosState = {
  items: Todo[];
  newTodo: string;
  status: TodosStatus;
};

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
  status: TodosStatus.idle,
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
          },
        };
      },
    },
    deleteItem(state, action: PayloadAction<Todo>) {
      const index = state.items.findIndex((t) => t.id === action.payload.id);
      state.items.splice(index, 1);
    },
    changeInput(state, action: PayloadAction<string>) {
      state.newTodo = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodosAsync.pending, (state) => {
        state.status = TodosStatus.pending;
      })
      .addCase(fetchTodosAsync.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = TodosStatus.idle;
      })
      .addCase(fetchTodosAsync.rejected, (state) => {
        state.items = [];
        state.status = TodosStatus.error;
      });
  },
});

export const { addItem, deleteItem, changeInput } = slice.actions;

export default slice.reducer;

export const fetchTodosAsync = createAsyncThunk('todos/fetchTodos', async () => {
  return await fetchTodos();
});
