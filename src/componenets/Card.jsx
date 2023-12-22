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
	<div className="flex justify-center items-center w-full h-screen bg-transparent">
      <div className=" flex flex-col items-center justify-center border border-gray-300 shadow-lg p-4 rounded-lg">
        <div className="flex flex-col bg-transparent rounded p-4 w-full max-w-xs">
          <div className="font-bold text-xl text-gray-300">{weather.data?.location?.name}</div>
          <div className="text-sm text-gray-500">{formattedDate}</div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
           <img src={weather.data?.current?.condition?.icon} alt="" />
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl text-gray-300">{weather.data?.current?.temp_c}&deg;C</div>
            <div className="flex flex-col items-center ml-6">
              <div className="text-gray-400">{weather.data?.current?.condition?.text}</div>

            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm text-gray-200">Wind</div>
              <div className="text-sm text-gray-500">{weather.data?.current?.wind_kph}Km/h</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm text-gray-200">Humidity</div>
              <div className="text-sm text-gray-500">{weather.data?.current?.humidity}%</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm text-gray-200">Visibility</div>
              <div className="text-sm text-gray-500">{weather.data?.current?.vis_km}Km</div>
            </div>
          </div>
        </div>
		<div className="flex">
		<Input/>
		<Button onClick={weather.fetchData} value="search"/>
		</div>
      </div>
	  </div>
    </>
  );
};

export default Card;
