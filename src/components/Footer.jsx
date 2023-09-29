import React from 'react'
import { useTheme } from "./ThemeProvider";

function Footer() {
  const { isDark } = useTheme();
  return (
    <div className='pb-4'>
         <p className={`font-medium ${isDark?'text-gray-50':'text-slate-900'}`}>Made By <a href="https://github.com/Krishrx">Krish</a> 🧡</p> 
    </div>
  )
}

export default Footer