import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as userServices from '../services/userServices';
import DataContext from '../context/DataContext';
import './Login.css';

const Login = function () {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { setLinks } = useContext(DataContext);
  const history = useHistory();

  async function submitLogin() {
    const token = await userServices.login({ userEmail, userPassword });
    if (token) {
      localStorage.setItem('token', token);
      history.push('/minhas-tarefas');
      setLinks([
        { url: 'minhas-tarefas', name: 'Minhas Tarefas' },
        { url: '/', name: 'Sair' },
      ]);
    }
  }

  return (
    <main className="login-container">
      <section className="login-card">
        <h3>
          Seja bem vinda(o)!
          <br />
          Faça login
        </h3>
        <form className="form-container">
          <input
            placeholder="E-mail"
            type="email"
            onChange={({ target: { value } }) => setUserEmail(value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={({ target: { value } }) => setUserPassword(value)}
          />

          <button onClick={submitLogin} type="button">Login</button>
        </form>
        <h4>Ou crie uma conta</h4>
        <Link to="/registro">Criar Conta</Link>
      </section>
    </main>
  );
};

export default Login;
