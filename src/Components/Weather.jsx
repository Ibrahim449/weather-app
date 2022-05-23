import React, { useEffect, useState } from 'react'
import { GoLocation } from "react-icons/go";
import { RiTempHotLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
// import { FaSearch } from "react-icons/fa";
import './weather.css'

const Weather = () => {
    const [city, setCity] =  useState();
    const [search, setSearch] = useState("mumbai")

    useEffect(() => {
        try {
            var fetchApi = async () => {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0c633e0f96ec7a5c324e9c63ba129e8a`
                const response = await fetch(url);
                // console.log(response);
                const resJson = await response.json()
                setCity(resJson.main);
                // console.log(resJson);
            }
        } catch (error) {
            console.log(error);
        }
        fetchApi();
    }, [search])

    console.log(city);
 
  return (
    <section>
      <div className="container">
        <div className="searchInput">
            <input type="text" name="search" id="search" placeholder='type city' onChange={(e) => setSearch(e.target.value)} />
            {/* <button type='submit'><FaSearch /></button> */}
        </div>

        {
            !city ? 
            (<h4>sorry no data found</h4>)
            :
            (
            <>
                <div className="weather">
            <div className="weatherImage">
                <img src="https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png" alt="weather" />
            </div>

            <div className="degree">
                <h1>{city.temp}&#176;C</h1>
                <h3 className="location"> 
                <GoLocation className='icon' />
                {search}
                <span></span> 
                </h3>
                <h3>Min : {city.temp_min}&#176; Cel | Max : {city.temp_max}&#176; Cel</h3>
            </div>
        </div>
        

        <div className="weatherDetails">

            <div className="futureTemp">
                <div className="tempIcon">
                    <RiTempHotLine className='icon' />
                </div>
                <div className="details">
                    <h3>{city.feels_like}&#176; C</h3>
                    <h5>feels like</h5>
                </div>
            </div>

            <div className="humidity">
                <div className="tempIcon">
                    <WiHumidity className='icon' />
                </div>

                <div className="details">
                    <h3>{city.humidity}%</h3>
                    <h5>humidity</h5>
                </div>
            </div>
        </div>
            </> )
        }
      </div>
    </section>
  )
}

export default Weather