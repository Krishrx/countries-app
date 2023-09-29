import {createContext, useContext, useState, useEffect} from 'react'

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

function ThemeProvider({ children }) {

  const getAndSetInitialState = () => {
    let themeState;
    if (localStorage.getItem('darkMode') !== null) {
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      themeState = isDarkMode;
    }
    else {
      localStorage.setItem('darkMode', 'false');
      themeState = false;
    }

    return themeState;
  }
    
  const [isDark, setDark] = useState(()=>getAndSetInitialState());

  useEffect(() => {
      if (isDark) {
        localStorage.setItem('darkMode', 'true');
      }
      else {
        localStorage.setItem('darkMode', 'false');
      }
  },[isDark])

    
    const toggleTheme = () => {
      setDark((prevDark) => !prevDark);
    }

  return (
    <ThemeContext.Provider value={{isDark,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider