import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'

export const DateContext = createContext();

const endpoint = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';

const DataProvider = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [numberPages, setNumberPages] = useState();

  useEffect(() => {
    const axiosData = async () => {
      const response = await axios.get(endpoint);
      const { data } = response.data;
      const { numPages } = response.headers['x-wp-totalpages']
      console.log(response)

      setArr(data)
      setNumberPages(numPages)
    }
    axiosData();
  }, []);

  const store = {
    arr,
    setArr,
    numberPages,
    setNumberPages,
  };

  return (
    <DateContext.Provider value={store}>
      {
        children
      }
    </DateContext.Provider>
  );
};

export default DataProvider