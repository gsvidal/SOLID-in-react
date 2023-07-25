import React from 'react';

export interface UserObj {
  id: number,
  name: string,
  username: string
}

interface UserProps {
  user: UserObj
}

export const User = ({user}: UserProps) => {

  return (
    <article key={user.id} className="user">
      <p>{user.name}</p>
      <p>{user.username}</p>
    </article>
  );
};
