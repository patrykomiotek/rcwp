import type { User } from 'components/User/store';
import { GenericList } from './GenericList';

const users = [{
  id: "1", name: "Ola",
}, {
  id: "2", name: "Jola",
}, {
  id: "3", name: "Mariola",
}];

export class UserList extends GenericList<User> {}

function GenericUsersList() {
  return (
    <UserList
      items={users}
      itemRenderer={((item) => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    />
  );
}

export { GenericUsersList };
