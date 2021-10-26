import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import type { RootState } from '../../store';
// import type { User } from './store';
import { asyncFetchUsers } from './store';

const selectUsers = (state: RootState) => state.users.data;
const selectIsLoading = (state: RootState) => state.users.isLoading;

const UsersList = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncFetchUsers());
  }, []);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {users && users.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      <button onClick={() => dispatch(asyncFetchUsers())}>Fetch data</button>
    </div>
  );
}
export { UsersList };
