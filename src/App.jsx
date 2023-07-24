import './App.css';
import { UsersList } from './components/UsersList';
import { useFetchUsers } from './hooks/useFetchUsers';

function App() {
  const { users } = useFetchUsers();
  return <UsersList users={users} />;
}

export default App;
