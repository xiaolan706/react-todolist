import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
