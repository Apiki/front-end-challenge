import axios from 'axios';

const API_URL = 'http://localhost:8080';

export async function getTasksByUser(userId) {
  const config = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  };
  return axios.get(`${API_URL}/tasks/user/${userId}`, config).then(
    ({ data: { tasks } }) => tasks,
  ).catch(
    ({ response: { data: { err: { message } } } }) => {
      alert(message);
    },
  );
}

export async function updateTasksByUser({ userId, tasksUpdated }) {
  const config = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  };
  return axios.put(`${API_URL}/tasks/user/${userId}`, { tasks: tasksUpdated }, config).then(
    ({ data: { tasks } }) => tasks,
  ).catch(
    ({ response: { data: { err: { message } } } }) => {
      alert(message);
    },
  );
}
