import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Forecast from './Components/Forecast';
import Inputs from './Components/Inputs';
import TempAndDetails from './Components/TempAndDetails';
import TimeAndLocation from './Components/TimeAndLocation';
import TopButtons from './Components/TopButtons';
import getFormattedWeatherData from './Services/weatherService';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: '' }); // Initialize as an object with a default query
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);
    
    try {
      const data = await getFormattedWeatherData({ ...query, units });
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);
      console.log(data); // Log the data for debugging
    } catch (error) {
      console.error("Error fetching weather data:", error);
      toast.error("Failed to fetch weather data. Please try again.");
    }
  };

  useEffect(() => {
    // Only call getWeather if there is a valid query
    if (query.q || (query.lat && query.lon)) {
      getWeather();
    }
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) {
      return "from-cyan-700 to-blue-300"; }// Default background if weather data is not available
      const threshold=units==='metric' ? 25:60;
      if (weather.temp <= threshold) return "from-cyan-700 to-blue-300";
      return "from-orange-700 to-yellow-300";
  };

  return (
    <div className={`mx-auto max-w-screen-lg mt-2 mb-4 py-4 px-4 sm:px-8 lg:px-16 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <div className="flex flex-col items-center">
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <div className="w-full mt-4">
            <Forecast title='3 Hour Step Forecast' data={weather.hourly} />
            <Forecast title='Daily Forecast' data={weather.daily} />
          </div>
        </div>
      )}
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default App;