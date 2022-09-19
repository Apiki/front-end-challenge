import React, { createContext, useState, useMemo } from 'react';
import { PropTypes } from 'prop-types';
import { useCookies } from 'react-cookie';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const { children } = props;
  const [cookies, setCookie] = useCookies(['tema']);
  const { tema } = cookies;
  const temaBool = tema !== '0' && tema !== undefined;
  const [modoEscuro, setModoEscuro] = useState(temaBool);

  const trocaTema = () => {
    setCookie('tema', modoEscuro ? 0 : 1);
    setModoEscuro(!modoEscuro);
  };

  const valor = useMemo(() => ({ modoEscuro, trocaTema }), [modoEscuro]);

  return (
    <ThemeContext.Provider value={valor}>
      {children}
    </ThemeContext.Provider>
  );
}
ThemeProvider.propTypes = {
  children: PropTypes.object,
};

export { ThemeProvider, ThemeContext };
