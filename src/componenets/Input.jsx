import React from 'react'
import { useWaether } from '../context/Weather.jsx'
function Input() {
  const weather = useWaether();
  return (
    <input className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    value={weather.searchCity}
    onChange={(e)=>weather.setSearchCity(e.target.value)}
   />
  )
}
export default Input;