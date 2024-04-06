import axios from "axios"
import { useState } from "react"

function ApiGet() {
   const apiKey = "101602001198fa5034cfaeb7da7dd1b6"
   const city = "Padrauna"
   const [data, setData] = useState({})
  
  const fetchLocation = async() => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            console.log(response.data)
            setData(response.data.coord)
    } catch (error) {
        console.log(error)
    }
  }
  
   //directly we cannot show whole data using you have to get data from that
  return (
    <div>
           <div><button onClick={fetchLocation}>Get Weather</button></div>
           <div>{data.lat}</div>   
    </div>
  )

}
export default ApiGet