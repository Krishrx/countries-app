import { Moon,Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
function Header() {

  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`w-10/12 px-2 py-4 flex justify-between items-center`}>
      <h1 className='font-bold text-2xl'>WCD</h1>
      <div onClick={toggleTheme}>
        {isDark?<Sun color="#fcd34d"/>:<Moon fill="black" />}
      </div>
    </div>
  );
}

export default Header;