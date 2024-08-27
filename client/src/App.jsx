import Navbar from './components/Navbar';
import UserTable from './components/UserTable';
import { users as initialUsers } from './data/users';

const App = () => {
  const [users, setUsers] = useState(initialUsers);

  const createUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Usuarios</h2>
          <button
            onClick={() => {
              const name = prompt("Ingresa el nombre del usuario:");
              const email = prompt("Ingresa el correo del usuario:");
              const role = prompt("Ingresa el rol del usuario:");
              if (name && email && role) {
                createUser({ name, email, role });
              }
            }}
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
