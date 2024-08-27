import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const UserCard = ({ user, onEditUser, onDeleteUser }) => {
  return (
    <tr>
      <td className="p-2">{user.name}</td>
      <td className="p-2">{user.email}</td>
      <td className="p-2">{user.role}</td>
      <td className="p-2 flex space-x-2">
        <button
          className="p-2 hover:bg-gray-200 rounded-full transition-shadow hover:shadow-lg"
          onClick={() => {
            const name = prompt("Actualizar el nombre del usuario:", user.name);
            const email = prompt("Actualizar el email del usuario:", user.email);
            const role = prompt("Actualizar el rol del Usuarios:", user.role);
            if (name && email && role) {
              onEditUser({ ...user, name, email, role });
            }
          }}
        >
          <FontAwesomeIcon icon={faPen} className='text-blue-500'/>
        </button>
        <button
          className="p-2 hover:bg-gray-200 rounded-full transition-shadow hover:shadow-lg"
          onClick={() => onDeleteUser(user.id)}
        >
          <FontAwesomeIcon icon={faTrash} className='text-red-500' />
        </button>
      </td>
    </tr>
  );
};

export default UserCard;
