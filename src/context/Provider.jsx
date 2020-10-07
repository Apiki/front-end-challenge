import React, { useState } from 'react';
import Context from './context';

export default function Provider({ children }) {
  const [actual, setActual] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [noPageAfter, setNoPageAfter] = useState(undefined);

  const context = { actual, setActual, lastPage, setLastPage, noPageAfter, setNoPageAfter };
  return <Context.Provider value={context}>{children}</Context.Provider>;
}
