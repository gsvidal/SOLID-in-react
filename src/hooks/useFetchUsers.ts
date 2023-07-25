import { useState, useEffect } from 'react';
import { UserObj } from '../components/User';

export const useFetchUsers = () => {
  const baseUrl: string = 'https://jsonplaceholder.typicode.com';

  let [users, setUsers] = useState<UserObj[]>([]);
  useEffect(() => {
    const url: string = `${baseUrl}/users`;
    const fetchData = async (url: string): Promise<void> => {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    };
    fetchData(url);
  }, []);

  return { users };
};
