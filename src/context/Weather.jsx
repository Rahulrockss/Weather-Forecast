import { createContext ,useContext,useState} from "react";

import { getWeatherData } from "../api";

const weatherContext = createContext(null);

export const useWaether =()=>{
    return useContext(weatherContext);

}
export const WeatherProvider =(props)=>{
    const [data,setData] = useState(null);
    const [searchCity,setSearchCity]= useState(null);

    const fetchData = async()=>{
        const response = await getWeatherData(searchCity)
        setData(response)
    }
    return <weatherContext.Provider value={{searchCity,setSearchCity,data,fetchData}}>
        {props.children}
    </weatherContext.Provider>
}