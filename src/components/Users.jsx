import { useEffect, useState } from 'react';
import { Link } from 'react-router.dom';
import api from '../api';

export default function Users() {
  const [users, setUsers] = useState<[]>([]);
  const getUsers = async () => {
    await api.get('/users').then((response) => setUsers(response.data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Listagem de usuários do blog</h2>
      <ul>
        {users && 
        users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}/posts`}>{user.name}</Link>
            <br/>
            {user.username} | {user.email}
            <br/>
            <br/>
          </li>
        ))}
      </ul>
    </div>
  );
}