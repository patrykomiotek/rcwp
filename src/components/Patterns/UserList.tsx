import type { User } from 'components/User/store';
import { GenericList } from './GenericList';

const users = [
  { id: "1", name: "Jan" },
  { id: "2", name: "Ola" },
  { id: "3", name: "Ala" },
];

export class UserList extends GenericList<User> { }

const GenericUserList = () => (
  <UserList
    items={users}
    itemRenderer={(item) => <div key={item.id}>{item.name}</div>}
  />
);

export { GenericUserList };
