import { useEffect } from 'react';
import type { Action } from 'redux';
import { connect } from 'react-redux';

import type { RootState, AppDispatch } from '../../store';
import type { User } from './store';
import { asyncFetchUsers } from './store';
// import type { }

// TODO: use this
type UserListProps = {
  users: User[];
  fetchUsers: any;
  fetchOneUser: any;
  propAsyncFetchUsers: any;
  isLoading: boolean;
}

{/* <UserListConnected /> */}
const UsersList = ({ users, fetchUsers, fetchOneUser, propAsyncFetchUsers, isLoading }: UserListProps) => {
  useEffect(() => {
    // fetchUsers();
    // const userid = 456;
    // fetchOneUser(userid);
    // propAsyncFetchUsers();
  }, []);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {users && users.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      <button onClick={() => propAsyncFetchUsers()}>Fetch data</button>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  users: state.users.data,
  isLoading: state.users.isLoading,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchUsers: () => dispatch({
    type: 'users/fetch',
    payload: [{
      id: "3",
      name: "Ala"
    }, {
      id: "4",
      name: "Jola"
    }]
  }),

  // fetchOneUser = (userId) => {
  //   type: 'users/fetchOneUser',
  //   payload: { userId }
  // }

  fetchOneUser: (userId: number) => dispatch({
    type: 'users/fetchOneUser',
    payload: { userId }
  }),
  propAsyncFetchUsers: () => dispatch(asyncFetchUsers())
});

const UsersListConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);

export {
  UsersList,
  UsersListConnected
};
