import { useEffect } from 'react';
import { connect } from 'react-redux';

import type { Store } from '../../store';
import type { User } from './store';
import { asyncFetchUsers } from './store';

type UserListProps = {
  users: User[];
  fetchUsers: any;
  fetchOneUser: any;
  propAsyncFetchUsers: any;
  isLoading: boolean;
}

const UsersList = ({ users, fetchUsers, fetchOneUser, propAsyncFetchUsers, isLoading }: UserListProps) => {
  useEffect(() => {
    // fetchUsers();
    // const userid = 456;
    // fetchOneUser(userid);
    propAsyncFetchUsers();
  }, []);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {users && users.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: Store) => ({
  users: state.users.data,
  isLoading: state.users.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
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
  fetchOneUser: (userId: number) => dispatch({
    type: 'users/fetchOneUser',
    payload: { userId }
  }),
  propAsyncFetchUsers: () => dispatch(asyncFetchUsers())
});

const UserListConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);

export {
  UsersList,
  UserListConnected
};
