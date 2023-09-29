import {createContext, useContext, useState} from 'react'

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
    
    const [isDark, setDark] = useState(false);
    
    const toggleTheme = () => {
        setDark(!isDark);
    }

  return (
    <ThemeContext.Provider value={{isDark,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider