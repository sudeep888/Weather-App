import { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

const Inputs = ({setQuery, setUnits}) => {
  const [city,setCity] =useState("");

  const handleSearchClick=()=>
  {
   if (city !== "") setQuery({q: city}) ;
  }

  const handleLocationClick=()=>
  {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const {latitude, longitude}=position.coords
        setQuery({lat:latitude,lon:longitude})
      })
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick(); // Call the search function on Enter key press
    }
  };
  return (
    <div className='flex flex-col sm:flex-row justify-center my-6'>
  <div className='flex flex-row w-full sm:w-4/4 items-center justify-center space-x-5'>
    <input 
      value={city}
      onChange={(e) => setCity(e.currentTarget.value)}
      onKeyDown={handleKeyDown}
      type="text" 
      placeholder="search by city name" 
      className="text-gray-900 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
    />
    <BiSearch
      size={30}
      className="text-white cursor-pointer transition ease-out hover:scale-125"
      onClick={handleSearchClick}
    />
    <BiCurrentLocation
      size={30}
      className="text-white cursor-pointer transition ease-out hover:scale-125"
      onClick={handleLocationClick}
    />
  </div>
  <div className="flex flex-row w-full sm:w-1/4 items-center justify-center space-x-4 mt-4 sm:mt-0">
    <button className="text-white text-2xl font-medium transition ease-out hover:scale-125" onClick={() => setUnits("metric")}>°C</button>
    <p className="text-white text-2xl font-medium transition ease-out">|</p>
    <button className="text-white text-2xl font-medium transition ease-out hover:scale-125" onClick={() => setUnits("imperial")}>°F</button>
  </div>
</div>
  );
}

export default Inputs;