import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BarChart3 } from 'lucide-react';
function SearchBar({fn}) {
  return (
    <div className='my-5 w-10/12 flex flex-col justify-center items-center space-y-8'>
      <input type="search" className='w-11/12 bg-orange-100 h-20 rounded-full border border-orange-500 focus:outline-none focus:border-4  px-8 py-2 text-2xl md:w-1/2' placeholder='Search countries by name and capital' onChange={fn} />
      <AnchorLink href='#CountryBarChart'><BarChart3 className='cursor-pointer' size={68} color='#fb923c' strokeWidth={3}/></AnchorLink>
    </div>
  )
}

export default SearchBar