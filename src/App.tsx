import './App.css';
import { UsersList } from './components/UsersList';
import { useFetchUsers } from './hooks/useFetchUsers';
import React from 'react';

function App() {
  const { users } = useFetchUsers();
  return <UsersList users={users} />;
}

export default App;
