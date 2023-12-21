const url ="https://api.weatherapi.com/v1/current.json?key=dde7734825874bc8b3f115555232012"


export const getWeatherData= async (city)=>{

    const respone = await fetch(`${url}&q=${city}&aqi='yes'`)
    return await respone.json()
}   


