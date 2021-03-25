// mensagens de erro
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

let users = JSON.parse(localStorage.getItem('users')) || [];

export function addUser(user) {
  let filteredUsers = users.filter((users) => {
    return users.email === user.email && users.password === user.password;
  });

  if (filteredUsers.length === 0) {
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return {
      type: 'ADD_USER',
      payload: user,
    };
  }

  filteredUsers = 0;
  toast.error('usuario existente');
}

export function logIn(user) {
  let filteredUsers = users.filter((users) => {
    return users.email === user.email && users.password === user.password;
  });

  if (filteredUsers.length) {
    let user = filteredUsers[0];

    localStorage.setItem('token', JSON.stringify(user));
  } else {
    toast.error('usuario nao encontrado');
  }
  return {
    type: 'LOGGED_IN',
  };
}

export function logOut() {
  localStorage.removeItem('token');
  toast.success('Desconectado');

  return {
    type: 'LOGGED_OUT',
  };
}
