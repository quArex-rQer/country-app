import {useState} from 'react';
import {createContext} from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
