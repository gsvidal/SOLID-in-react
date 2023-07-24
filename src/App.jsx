import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {users.map((user) => {
        return (
          <article key={user.id} className="user">
            <p>{user.name}</p>
            <p>{user.username}</p>
          </article>
        );
      })}
    </>
  );
}

export default App;
