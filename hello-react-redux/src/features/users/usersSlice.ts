import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { User } from './User';
import { fetchUsers } from './userAPI';

type UsersState = {
  loading: boolean;
  items: User[];
};

const initialState: UsersState = {
  loading: false,
  items: [],
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersRequested(state, action: PayloadAction<undefined>) {
      state.loading = true;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state, action: PayloadAction<undefined>) => {
        state.loading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export const { fetchUsersRequested, fetchUsersSuccess } = slice.actions;
export default slice.reducer;

export function usersSelector(rootState: RootState) {
  return rootState.users;
}

export function fetchUsersThunk() {
  return async (dispatch: Dispatch) => {
    dispatch(fetchUsersRequested());
    const users = await fetchUsers();
    dispatch(fetchUsersSuccess(users));
  };
}

export const fetchUsersAsync = createAsyncThunk('users/fetchUsers', async () => {
  return await fetchUsers();
});
