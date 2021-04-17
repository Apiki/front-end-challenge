import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'

export const DateContext = createContext();

const endpoint = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';

const DataProvider = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [numberPages, setNumberPages] = useState();
  const [numberPosts, setNumberPosts] = useState();
  const [count, setCount] = useState(1);

  useEffect(() => {
    const axiosData = async () => {
      const response = await axios.get(endpoint);
      const data = await response.data;
      const numPages = response.headers['x-wp-totalpages']
      const numPosts = response.headers['x-wp-total']

      setArr(data);
      setNumberPages(numPages);
      setNumberPosts(numPosts);
    }
    axiosData();
  }, []);

  const showMorePosts = () => {
    
    if(count <= numberPages) {
      const axiosNewPage = async () => {
        const response = await axios.get(`${endpoint}&page=${count+1}`);
        const data = await response.data;
        setArr(data);
      
    }
    axiosNewPage();
    setCount(count + 1);
    
  }
}

  const store = {
    arr,
    setArr,
    numberPages,
    setNumberPages,
    numberPosts,
    setNumberPosts,
    showMorePosts,
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