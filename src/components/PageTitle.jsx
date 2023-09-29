import { useTheme } from "./ThemeProvider";
// eslint-disable-next-line react/prop-types
function PageTitle({ countryCount, filCount, searchTextStatus }) {
  
  const { isDark } = useTheme();

  const searchResultCount = searchTextStatus ? <p className={`text-2xl font-medium text-orange-400 md:text-3xl italic   ${isDark?'text-orange-600':''}`}>{filCount} satisfied the search criteria. </p> : '';

  return (
    <div id='pageTitle' className={`bg-gray-100 w-10/12 text-center p-5 space-y-5 py-8 rounded-md ${isDark?'bg-gray-300':''}`}>
          <h1 className={`text-5xl font-bold text-orange-400 md:text-6xl ${isDark?'text-orange-600':''}`}>World Countries Data</h1>
         <p className={`text-2xl font-medium text-slate-800 md:text-3xl ${isDark?'text-slate-900':''}`}>Currently, we have {countryCount} countries</p>
        {searchResultCount}
    </div>
  )
}

export default PageTitle