import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUserByIdAsync, usersSelector } from './usersSlice';

function UsersDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { selectedItem } = useAppSelector(usersSelector);

  useEffect(() => {
    dispatch(fetchUserByIdAsync(Number(id)));
  }, [id, dispatch]);

  return (
    <div className="UsersDetails">
      <p>Name : {selectedItem?.name}</p>
      <p>Email : {selectedItem?.email}</p>
    </div>
  );
}

export default UsersDetails;
