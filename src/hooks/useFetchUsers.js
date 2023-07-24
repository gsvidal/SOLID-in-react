import { useState, useEffect } from 'react';

export const useFetchUsers = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  let [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `${baseUrl}/users`;
    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);
      setUsers(data);
    };
    fetchData(url);
  }, []);

  return { users };
};
