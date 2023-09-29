import  { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './Country'
import PageTitle from './PageTitle'
import SearchBar from './SearchBar'
import Header from './Header'
import BarChartCountry from './BarChartCountry'
import Footer from './Footer'
import { useTheme } from './ThemeProvider'

function CountryContainer() {

    const [countryArray, setCountry] = useState([]);

    const [countryCount, setCountryCount] = useState(0);
    
    const [filteredCountryArray, setFilteredCountry] = useState([]);

    const [filCount, setFilCount] = useState(0);

    const [searchBarValue, setSearchBarValue] = useState('');

    const [searchTextStatus, setSearchStatus] = useState(false);
    
    const { isDark } = useTheme();
  
    useEffect(() => {
        fetchCountry();
    }, [])
    
    useEffect(() => {
        if(searchBarValue!==''){
            let filteredArray = filterArrayBasedOnSearchValue(searchBarValue, countryArray);
            sortCountry(filteredArray);
            setFilteredCountry(filteredArray);
            setFilCount(filteredArray.length);
            setSearchStatus(true);
       }
        else {
            setFilteredCountry(countryArray);
            setSearchStatus(false);
        }
    },[searchBarValue])

    const fetchCountry = async() => {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,languages');
        const res = await response.data;
        sortCountry(res);
        setCountry(res);
        setFilteredCountry(res);
        setCountryCount(res.length);
    }
  
  const sortCountry = (arrObj) => {
      arrObj.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
        
      return nameA.localeCompare(nameB, undefined, { sensitivity: 'base' });
    });
  }

  const handleSearchBarValue = (e) => {
       setSearchBarValue(e.target.value);   
  }

  const filterArrayBasedOnSearchValue = (value, array) => {
      if (value !== '' && value !== undefined) {
        let filteredArray;
        filteredArray = array.filter(obj => {
        const capital = obj.capital[0]!==undefined?obj.capital[0]:'';
        const countryName = obj.name.common!==undefined?obj.name.common:'';
        return (
            (capital && capital.toLowerCase().includes(value.toLowerCase())) ||
            (countryName && countryName.toLowerCase().includes(value.toLowerCase()))
        );
        });
        return filteredArray;
    }
      return array;
};


  return (
    <div className={`w-full flex flex-col justify-center items-center ${isDark?'bg-gray-900':''}`}>
      <Header/>
      <PageTitle countryCount={countryCount} filCount={filCount} searchTextStatus={searchTextStatus} />
      <SearchBar fn={handleSearchBarValue} />
      <Country countryArray={filteredCountryArray} />
      <BarChartCountry />
      <Footer/>
    </div>
  )
}

export default CountryContainer