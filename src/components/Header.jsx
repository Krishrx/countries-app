import { Moon,Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
function Header() {

  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`w-10/12 px-2 py-4 flex justify-between items-center ${isDark?'text-gray-100':''}`}>
      <h1 className='font-bold text-2xl font-Caudex'>WCD</h1>
      <div className="cursor-pointer" onClick={toggleTheme}>
        {isDark?<Sun color="#fcd34d"/>:<Moon fill="#030712" />}
      </div>
    </div>
  );
}

export default Header;