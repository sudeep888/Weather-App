import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TempAndDetails = ({weather:{
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    humidity,
    speed,
    sunrise,
    sunset,
    feels_like,
},units, }) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${ units==="metric" ? "km/h": "m/s"}`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    
    <div className="weather-details">
  <div className="weather-type flex items-center justify-center py-6 text-xl text-cyan-300 mt-6">
    <p>{details}</p>
  </div>
  <div className="weather-info flex flex-col sm:flex-row items-center justify-between py-3">
    <img src={icon} alt="weather icon" className="w-20" />
    <p className="text-5xl text-white">{`${temp.toFixed()}°`}</p>
    <div className="weather-vertical-details flex flex-col space-y-3 items-start my-6">
      {verticalDetails.map(({ id, Icon, title, value }) => (
        <div key={id} className="flex font-light text-sm items-center justify-center">
          <Icon size={18} className="text-white mr-1" />
          <p className="text-white">{`${title}:`}</p>
          <span className="text-white font-medium ml-1">{value}</span>
        </div>
      ))}
    </div>
  </div>
  <div className="weather-horizontal-details flex flex-col sm:flex-row items-center justify-center space-x-10 text-sm py-3">
    {horizontalDetails.map(({ id, Icon, title, value }) => (
      <div key={id} className="flex flex-row items-center">
            <Icon size={30} className="text-white" />
        <p className="text-white font-light ml-1">
          {`${title}:`}
          <span className="text-white font-medium ml-1">{value}</span>
        </p>
      </div>
    ))}
  </div>
</div>    
  );
};

export default TempAndDetails;