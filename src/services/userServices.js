import axios from 'axios';

const API_URL = 'http://localhost:8080';

export async function login({ userEmail, userPassword }) {
  return axios.post(`${API_URL}/users/login`, { userEmail, userPassword }).then(
    ({ data: { token } }) => token,
  ).catch(
    ({ response: { data: { err: { message } } } }) => {
      alert(message);
    },
  );
}

export async function create({ userName, userEmail, userPassword }) {
  return axios.post(`${API_URL}/users/`, { userName, userEmail, userPassword }).then(
    ({ data }) => data,
  ).catch(
    ({ response: { data: { err: { message } } } }) => {
      alert(message);
    },
  );
}
