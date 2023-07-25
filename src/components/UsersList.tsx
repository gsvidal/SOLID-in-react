import { User, UserObj } from './User';
import React from 'react';

interface UsersListProps {
  users: UserObj[];
}

export const UsersList = ({ users }: UsersListProps) => (
  <>
    {users.map((user) => (
      <User user={user} key={user.id} />
    ))}
  </>
);
