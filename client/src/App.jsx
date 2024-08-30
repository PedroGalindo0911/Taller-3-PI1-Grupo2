import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import UserTable from './components/UserTable';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  // Obtener usuarios al cargar la app
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };
  
  const updateUser = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/users/${editingUser.id}`, { name, email, role });
      setUsers(users.map(user => user.id === editingUser.id ? response.data : user));
      setEditingUser(null);
      clearForm();
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };
  
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };
  
  const handleCreateUser = () => {
    const name = prompt("Ingresa el nombre del usuario:");
    const email = prompt("Ingresa el correo del usuario:");
    const role = prompt("Ingresa el rol del usuario:");
    if (name && email && role) {
      createUser({ name, email, role }); 
    }
  };
  
  const createUser = async ({ name, email, role }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/users', { name, email, role });
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };
  

  const clearForm = () => {
    setName('');
    setEmail('');
    setRole('');
    setEditingUser(null);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Usuarios</h2>
          <button
            onClick={handleCreateUser}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Crear Usuario
          </button>
        </div>
        <UserTable users={users} onEditUser={updateUser} onDeleteUser={deleteUser} />
      </div>
    </div>
  );
};

export default App;
