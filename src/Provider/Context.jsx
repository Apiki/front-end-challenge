/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const Context = createContext();

const DataProvider = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [numberPages, setNumberPages] = useState();
  const [numberPosts, setNumberPosts] = useState();
  const [count, setCount] = useState(1);
  const [dataIntern, setDataIntern] = useState([]);
  const [loading, setLoading] = useState(true);

  const store = {
    arr,
    setArr,
    numberPages,
    setNumberPages,
    numberPosts,
    setNumberPosts,
    dataIntern,
    setDataIntern,
    loading,
    setLoading,
    count,
    setCount,
  };

  return (
    <Context.Provider value={ store }>
      {
        children
      }
    </Context.Provider>
  );
};

export default DataProvider;
