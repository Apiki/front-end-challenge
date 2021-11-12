import jwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';
import isAuthenticated from '../../a/auth/isAuthenticated';
import * as tasksServices from '../services/tasksServices';

const DataProvider = function ({ children }) {
  const [links, setLinks] = useState([
    { url: '', name: 'Login' },
  ]);
  const [userTasks, setUserTasks] = useState([
    { taskDescription: 'Nenhuma', taskStatus: 'em andamento' },
  ]);
  const [climates, setClimates] = useState([{
    climateId: 1, climateHour: 0, climateRain: 0, dateId: 0,
  }]);

  useEffect(() => {
    if (isAuthenticated()) {
      setLinks([
        { url: '/minhas-tarefas', name: 'Minhas Tarefas' },
        { url: '/', name: 'Sair' },
      ]);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated()) {
      const token = localStorage.getItem('token');
      const { data: { userId } } = jwtDecode(token);
      tasksServices.getTasksByUser(userId)
        .then((tasks) => {
          const tasksResponse = tasks || [{ taskDescription: 'Nenhuma', taskStatus: 'em andamento' }];
          setUserTasks(tasksResponse);
        });
    }
  }, [links]);

  const contextValue = {
    links,
    setLinks,
    userTasks,
    setUserTasks,
    climates,
    setClimates,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DataProvider;
