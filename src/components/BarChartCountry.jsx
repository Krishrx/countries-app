import React,{useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../shared/Button';
import { ArrowUpCircle } from 'lucide-react';

function BarChartCountry() {
  const [graph, setGraphState] = useState('populated countries')
  
  const handleGraphPop = () => {
    setGraphState('populated countries')
  }

  const handleGraphLang = () => {
    setGraphState('spoken languages')
  }
  return (
    <div className='w-full h-full flex flex-col justify-center items-center p-5 rounded-md'>
      <div className='flex gap-4 py-3'>
        <Button btnLabelText={'Population'} customStyle={'bg-orange-400 uppercase font-medium text-white'} fn={handleGraphPop} />
      <Button btnLabelText={'languages'} customStyle={'bg-orange-400 uppercase font-medium text-white'} fn={handleGraphLang}/>
      </div>
      <h1 className='text-2xl font-medium py-3'>10 Most {graph} in the World</h1>
      {graph==='populated countries'?<BarGroup arr={tenHighestPopulation} />:<BarGroupLang arr={languagesInScaleOfHundred}/>}
      <div className='self-end pt-5'>
        <AnchorLink href='#pageTitle'><ArrowUpCircle size={40} fill='purple' color='white'/></AnchorLink>
      </div>
    </div>
  );
}

function BarTemplate({ country, pop, total }) {
  let percent = calculatePercentage(pop, total);
  return (
      <div key={country} className="grid grid-cols-4 w-10/12 md:w-6/12 h-full">

          <div className=" uppercase">
            {country}
          </div>

        <div className={`w-full h-full col-span-2`} >
          <div style={{width:`${percent}%`}} className={`bg-orange-500 h-full rounded-md`}></div>
          </div>

          <div className="pl-2">
            {pop.toLocaleString()}
          </div>

      </div>
    );
}

const BarGroup = ({arr}) => {
  const bar = arr.map((b,index) => {
    let country = b.country;
    let pop = b.population;
    return(<BarTemplate key={index} country={country} pop={pop} total={7693165599}/>)
  })

  return (
    <div id='CountryBarChart' className='w-full flex flex-col justify-center items-center gap-2 shadow-md rounded-lg p-5'>
      {bar}
    </div>
  )

}


const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'USA', population: 323947000 },
  { country: 'Indonesia', population: 207035893 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russia', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]


function calculatePercentage(value,total) {
  if (typeof value !== 'number' || value < 0 || typeof total !== 'number' || total < 0) {
    return '0';
  }

  const percentage = ((value / total) * 100);

  return parseInt(percentage);
}

const topLanguages = [
  { name: "Mandarin", speakers: 1.1e9 },
  { name: "Spanish", speakers: 460e6 },
  { name: "English", speakers: 360e6 },
  { name: "Hindi", speakers: 310e6 },
  { name: "Arabic", speakers: 310e6 },
  { name: "Bengali", speakers: 230e6 },
  { name: "Portuguese", speakers: 220e6 },
  { name: "Russian", speakers: 160e6 },
  { name: "Japanese", speakers: 128e6 },
  { name: "Punjabi", speakers: 120e6 }
];


const totalSpeakers = topLanguages.reduce((total, language) => total + language.speakers, 0);

const languagesInScaleOfHundred = topLanguages.map(language => ({
  name: language.name,
  speakersInScale: parseInt((language.speakers / totalSpeakers) * 100)
}));

const BarGroupLang = ({arr}) => {
  const bar = arr.map((b,index) => {
    let country = b.name;
    let pop = b.speakersInScale;
    return(<BarTemplate key={index} country={country} pop={pop} total={100}/>)
  })

  return (
    <div id='CountryBarChart' className='w-full flex flex-col justify-center items-center gap-2 shadow-md rounded-lg p-5'>
      {bar}
    </div>
  )

}



export default BarChartCountry;