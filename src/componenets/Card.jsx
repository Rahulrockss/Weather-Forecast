import React from "react";
import { useWaether } from "../context/Weather.jsx";
import Input from "./Input.jsx";
import Button from './Button.jsx'

const Card = () => {
  const weather = useWaether();
  const dayTime = new Date(`${weather.data?.location?.localtime}`)
  const options = {weekday:'long',hour:'numeric',minute:'numeric'}
  const formattedDate = dayTime.toLocaleDateString('en-US',options);
  return (
    <>
      <div className="min-h-screen  items-center justify-center">
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
          <div className="font-bold text-xl">{weather.data?.location?.name}</div>
          <div className="text-sm text-gray-500">{formattedDate}</div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
           <img src={weather.data?.current?.condition?.icon} alt="icon" />
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">{weather.data?.current?.temp_c}&deg;C</div>
            <div className="flex flex-col items-center ml-6">
              <div>{weather.data?.current?.condition?.text}</div>

            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">{weather.data?.current?.wind_kph}Km/h</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">{weather.data?.current?.humidity}%</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">{weather.data?.current?.vis_km}Km</div>
            </div>
          </div>
        </div>
		<Input/>
		<Button onClick={weather.fetchData} value="search"/>
      </div>
    </>
  );
};

export default Card;
