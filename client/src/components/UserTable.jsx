import React from 'react';
import UserCard from './UserCard';

const UserTable = ({ users, onEditUser, onDeleteUser }) => {
  return (
    <table className="w-full bg-white shadow-md rounded">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 text-left">Nombre</th>
          <th className="p-2 text-left">Email</th>
          <th className="p-2 text-left">Rol</th>
          <th className="p-2 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserCard key={user.id} user={user} onEditUser={onEditUser} onDeleteUser={onDeleteUser} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
