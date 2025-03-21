import React, { useEffect, useState } from 'react';
import { fetchTopUsers } from '../services/apiService';  // ✅ Import API function

const TopUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchTopUsers();
        setUsers(data);  
      } catch (error) {
        setError('Failed to fetch top users');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Top Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border p-3 rounded-lg shadow-md my-2">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p>Posts: {user.postCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
