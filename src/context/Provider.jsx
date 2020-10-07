import React, { useState } from 'react';
import Context from './context';

export default function Provider({ children }) {
  const [actual, setActual] = useState(1);
  const context = { actual, setActual };
  return <Context.Provider value={context}>{children}</Context.Provider>;
}
