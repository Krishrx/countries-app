import { Moon,Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
function Header() {

  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`w-10/12 px-2 py-4 flex justify-between items-center ${isDark?'text-gray-100':''}`}>
      <h1 className='font-bold text-2xl font-Caudex'>WCD</h1>
      <div className={`cursor-pointer p-3 rounded-full ${isDark?'bg-gray-300 hover:bg-gray-200':'bg-gray-200 hover:bg-gray-300'}`} onClick={toggleTheme}>
        {isDark?<Sun color="#eab308"/>:<Moon  />}
      </div>
    </div>
  );
}

export default Header;