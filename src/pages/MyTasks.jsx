import jwtDecode from 'jwt-decode';
import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import * as tasksServices from '../services/tasksServices';
import './MyTasks.css';

const MyTasks = function () {
  const { userTasks, setUserTasks } = useContext(DataContext);
  const [inEditTask, setInEditTask] = useState();

  function editMode({ target: { id } }) {
    const changedTasks = userTasks.map((task, index) => {
      if (index === Number(id)) {
        setInEditTask(task);
        return { ...task, isEditing: true };
      }
      return task;
    });
    setUserTasks(changedTasks);
  }

  function handleTaskChange({ target: { value, name } }) {
    setInEditTask({ ...inEditTask, [name]: value });
  }

  function saveChanges({ target: { id } }) {
    const changedTasks = userTasks.map((task, index) => {
      if (index === Number(id)) {
        return { ...inEditTask };
      }
      return task;
    });
    setUserTasks(changedTasks);
    const token = localStorage.getItem('token');
    const { data: { userId } } = jwtDecode(token);
    tasksServices.updateTasksByUser({ userId, tasksUpdated: changedTasks });
  }

  function addTasks() {
    const description = document.querySelector('#new-task-description');
    const status = document.querySelector('#new-task-status');
    const changedTasks = [...userTasks, {
      taskDescription: description.value,
      taskStatus: status.value,
    }];
    setUserTasks(changedTasks);
    const token = localStorage.getItem('token');
    const { data: { userId } } = jwtDecode(token);
    tasksServices.updateTasksByUser({ userId, tasksUpdated: changedTasks });
  }

  function removeTask({ target: { id } }) {
    const changedTasks = userTasks.filter((_task, index) => index !== Number(id));
    setUserTasks(changedTasks);
    const token = localStorage.getItem('token');
    const { data: { userId } } = jwtDecode(token);
    tasksServices.updateTasksByUser({ userId, tasksUpdated: changedTasks });
  }

  return (
    <main className="my-tasks-container">
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            userTasks.map(({ taskDescription, taskStatus, isEditing }, index) => {
              if (isEditing) {
                return (
                  <tr key={`${taskDescription}${taskStatus}`}>
                    <td>
                      <input
                        onChange={handleTaskChange}
                        name="taskDescription"
                        value={inEditTask.taskDescription}
                        type="text"
                      />
                    </td>
                    <td>
                      <select
                        onChange={handleTaskChange}
                        name="taskStatus"
                        value={inEditTask.taskStatus}
                      >
                        <option value="pendente">Pendente</option>
                        <option value="em andamento">Em Andamento</option>
                        <option value="pronto">Pronto</option>
                      </select>
                    </td>
                    <td><button id={index} type="button" onClick={saveChanges}>Salvar</button></td>
                  </tr>
                );
              }
              return (
                <tr key={`${taskDescription}${taskStatus}`}>
                  <td><p>{taskDescription}</p></td>
                  <td><p>{taskStatus}</p></td>
                  <td>
                    <button id={index} type="button" onClick={editMode}>Editar</button>
                    <button id={index} type="button" onClick={removeTask}>Excluir</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div>
        <h4>Nova tarefa</h4>
        <input
          type="text"
          id="new-task-description"
        />
        <select
          type="text"
          id="new-task-status"
        >
          <option value="pendente">Pendente</option>
          <option value="em andamento">Em Andamento</option>
          <option value="pronto">Pronto</option>
        </select>
        <button onClick={addTasks} type="button">Adicionar tarefa</button>
      </div>
    </main>
  );
};

export default MyTasks;
