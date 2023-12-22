import React from 'react'
import { useWaether } from '../context/Weather.jsx'
function Input() {
  const weather = useWaether();
  return (
    <input className="w-half mx-5 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-gray-100"
    value={weather.searchCity}
    placeholder='Enter City Here'
    onChange={(e)=>weather.setSearchCity(e.target.value)}
   />
  )
}
export default Input;