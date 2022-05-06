import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchUsersAsync, usersSelector } from "./usersSlice";
import { Outlet, Link } from 'react-router-dom';

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
      <div className="left">
        {loading ? <div>Loading...</div> : items.map((it) => <div key={it.id}><Link to={"/users/"+it.id}>{it.name}</Link></div>)}
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}

export default Users;
