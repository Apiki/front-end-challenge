import React, { useContext } from 'react';
import PageContext from '../context/PageContext';
import { ContainerPageList, NumberPage } from '../styles/Pagination';

const Pagination = () => {
  const { pageTotal, setPageCurrent, pageCurrent } = useContext(PageContext)
  const page_list = []

  for(let i = 1; i <= pageTotal; i++){
    page_list.push(i)
  }

  return <ContainerPageList>
    {page_list.map((page) => 
      <NumberPage 
      onClick={() => setPageCurrent(page)}
      key={page}
      active={page === pageCurrent ? true : false}>
        {page}
      </NumberPage>
    )}
  </ContainerPageList>;
};

export default Pagination;
