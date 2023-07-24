import { User } from './User';

export const UsersList = ({ users }) => (
  <>
    {users.map((user) => (
      <User user={user} key={user.id} />
    ))}
  </>
);
