import { useEffect } from 'react';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';

import type { Store } from '../../store';
import type { User } from './store';

type UserListProps = {
  users: User[];
  fetchUsers: any;
  fetchOneUser: any;
}

const UsersList = ({ users, fetchUsers, fetchOneUser }: UserListProps) => {
  useEffect(() => {
    fetchUsers();
    const userid = 456;
    fetchOneUser(userid);
  }, []);
  return (
    <div>
      {users && users.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: Store) => ({
  users: state.users.data,
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
  })
});

const UserListConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);

export {
  UsersList,
  UserListConnected
};
