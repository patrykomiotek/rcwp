import { connect } from 'react-redux';

import type { Store } from '../../store';
import type { User } from './store';

type UserListProps = {
  users: User[]
}

const UsersList = ({ users }: UserListProps) => {
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

const UserListConnected = connect(
  mapStateToProps
)(UsersList);

export {
  UsersList,
  UserListConnected
};
