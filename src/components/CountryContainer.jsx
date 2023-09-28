import  { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './Country'
import PageTitle from './PageTitle'
import SearchBar from './SearchBar'
import Header from './Header'
import BarChartCountry from './BarChartCountry'

function CountryContainer() {

  const [countryArray, setCountry] = useState([]);

  const [searchBarValue, setSearchBarValue] = useState('');

  const [countryCount, setCountryCount] = useState(countryArray.length);

  useEffect(() => {
      if(searchBarValue!==''){
        let filteredArray = filterArrayBasedOnSearchValue(searchBarValue, countryArray);
        sortCountry(filteredArray);
        setCountry(filteredArray);
        setCountryCount(filteredArray.length);
      }
      else {
        fetchCountry();
      }
    },[searchBarValue])

    const fetchCountry = async() => {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,languages');
        const res = await response.data;
        sortCountry(res);
        setCountry(res);
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
    let filteredArray;
  if (value !== '' && value !== undefined) {
     filteredArray = array.filter(obj => {
      const capital = obj.capital[0]!==undefined?obj.capital[0]:'';
      const countryName = obj.name.common!==undefined?obj.name.common:'';
      return (
        (capital && capital.toLowerCase().includes(value.toLowerCase())) ||
        (countryName && countryName.toLowerCase().includes(value.toLowerCase()))
      );
    });
    }
    return filteredArray;
};


  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Header/>
      <PageTitle countryCount={countryCount}/>
      <SearchBar fn={handleSearchBarValue} />
      <Country countryArray={countryArray} />
      <BarChartCountry/>
    </div>
  )
}

export default CountryContainer