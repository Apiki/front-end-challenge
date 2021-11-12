import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Register.css';
import * as userServices from '../services/userServices';

function Register() {
  const [register, setRegister] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    confirmPassword: '',
  });
  const history = useHistory();

  function handleChange({ target: { name, value } }) {
    setRegister({
      ...register,
      [name]: value,
    });
  }

  async function createUser() {
    if (register.userPassword !== register.confirmPassword) {
      alert('Passwords must be equal');
    } else {
      const data = await userServices.create(register);
      if (data) history.push('/');
    }
  }

  return (
    <main className="register-container">
      <h3>
        Para criar uma conta preencha os campos abaixo:
      </h3>
      <form className="register-form">
        <label htmlFor="name">
          Nome:
          <input
            value={register.userName}
            name="userName"
            type="text"
            id="name"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            value={register.UserEmail}
            name="userEmail"
            id="email"
            type="email"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            value={register.UserPassword}
            name="userPassword"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="confirm-password">
          Confirme sua senha:
          <input
            value={register.confirmPassword}
            name="confirmPassword"
            type="password"
            id="confirm-password"
            onChange={handleChange}
          />
        </label>
        <button onClick={createUser} type="button">Criar conta</button>
      </form>
    </main>
  );
}

export default Register;
