import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchUsers } from "./userAPI";
import { fetchUsersAsync, fetchUsersRequested, fetchUsersSuccess, usersSelector } from "./usersSlice";

function Users() {
  const dispatch = useAppDispatch();
  const { loading, items } = useAppSelector(usersSelector);

  useEffect(() => {
    // au delà de redux-thunk
    // voir aussi : redux-promise, redux-saga, redux-observable
    //dispatch(fetchUsersThunk());
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <div className="Users">
      {loading ? <div>Loading...</div> : items.map((it) => <div key={it.id}>{it.name}</div>)}
    </div>
  );
}

export default Users;
