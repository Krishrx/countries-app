
// eslint-disable-next-line react/prop-types
function PageTitle({ countryCount }) {

  const searchResultCount = countryCount !==250 ? <p className='text-2xl font-medium text-orange-400 md:text-3xl italic'>{countryCount} satisfied the search criteria. </p> : '';

  return (
    <div id='pageTitle' className='bg-gray-100 w-10/12 text-center p-5 space-y-5 py-8'>
          <h1 className='text-5xl font-bold text-orange-400 md:text-6xl'>World Countries Data</h1>
         <p className='text-2xl font-medium text-slate-800 md:text-3xl'>Currently, we have 250 countries</p>
        {searchResultCount}
    </div>
  )
}

export default PageTitle