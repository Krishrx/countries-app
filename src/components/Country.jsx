/* eslint-disable react/prop-types */
import { useTheme } from "./ThemeProvider";

function Country({countryArray}) {
    const { isDark } = useTheme();
  return (
    <div className={`flex justify-center items-center flex-wrap m-5 gap-x-20 rounded-md  w-10/12 ${isDark?'bg-gray-600':'bg-gray-100'}`}>

          {countryArray.map((arr, index) => {
              
              const capital = arr.capital[0];
              const flag = arr.flags.svg;
              const flagAlt = arr.flags.alt;
              const countryName = arr.name.common;
              const population = arr.population;
              const languages = arr.languages;
              const langArr = Object.entries(languages).map(([key, val]) => {
                    return val; 
              });
              const firstThreeLangs = langArr.slice(0, 2);
              const lang = firstThreeLangs.join(',');
              let currencySymbol = '';
                for (const currency in arr.currencies) {
                    if (arr.currencies.hasOwnProperty(currency)) {
                        const symbol = arr.currencies[currency].symbol;
                        currencySymbol = symbol;
                    }
                }
              
              return (
                <div key={index} className={`m-5 w-[400px] h-full shadow-sm rounded-md overflow-hidden  country-box ${isDark?'bg-gray-400':'bg-white'}`}>
                  
                  <div className='flex flex-col justify-evenly items-center space-y-8 p-2'>
                      <img src={flag} alt={flagAlt} className='w-[240px] h-[143px] rounded-md shadow-md object-cover mt-6' />
                      <p className={`w-[270px]  font-bold  uppercase text-2xl text-center ${isDark?'text-orange-600':'text-orange-400'}`}>{countryName}</p>
                  </div>

                  <div className={`px-8 text-2xl space-y-8 `}>

                    <p className={`mt-8 font-bold  ${isDark?'text-slate-900':'text-slate-800'}`}> Capital: <span className={`font-medium ${isDark?'text-orange-50':'text-slate-600 '}`}>{capital || '-'}</span></p>

                    <p className={`font-bold text-slate-800 ${isDark?'text-slate-900':''}`}> Languages: <span className={`font-medium  ${isDark?'text-orange-50':'text-slate-600 '}`}>{lang || '-'}</span></p>

                    <p className={`font-bold  ${isDark?'text-slate-900':'text-slate-800'}`}> Population: <span className={`font-medium  ${isDark?'text-orange-50':'text-slate-600'}`}>{population.toLocaleString()}</span></p>

                    <p className={`font-bold  ${isDark?'text-slate-900':'text-slate-800'}`}> Currency: <span className={`font-medium  ${isDark?'text-orange-50':'text-slate-600'}`}>{currencySymbol || '-'}</span></p>
                  </div>
                  
                  <div className="flex justify-center w-full p-5">
                      <a href={`https://en.wikipedia.org/wiki/${countryName}`} target="_blank" rel="noopener noreferrer" className={`know-btn  text-white h-fit px-2 py-4 rounded-lg translate-y-[150%] ${isDark?'bg-orange-600 font-medium':'bg-orange-400'}`}>Know More</a>
                  </div>

                  </div>
                )
              
              
          })}
    </div>
  )
}

export default Country