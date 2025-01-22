import "./WeatherApp.css";
import sunny from "../../images/sunny.png";
import cloudy from "../../images/cloudy.png";
import rainy from "../../images/rainy.png";
import snowy from "../../images/snowy.png";
import { useState, useEffect } from "react";

export const WeatherApp = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const api_key = "927d9593b1e91050f32ce5347dd25b3b";

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      const defaultLocation = "Benecko";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`;
      const res = await fetch(url);
      const defaultData = await res.json();
      setData(defaultData);
    };
    fetchDefaultWeather();
  }, []);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const search = async () => {
    if (location.trim() !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      const searchData = await response.json();
      setData(searchData);
      setLocation("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy
  };

  const weatherImage = data.weather
    ? weatherImages[data.weather[0].main]
    : null;

  return (
    <>
      <div className="container-weather">
        <div className="weather-app">
          <div className="search">
            <div className="search-top">
              <i className="fa-solid fa-location-dot"></i>
              <div className="location">{data.name}</div>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Zadej lokalitu"
                value={location}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
            </div>
          </div>
          <div className="weather">
            <img src={weatherImage} alt="sunny" />
            <div className="weather-type">
              {data.weather ? data.weather[0].main : null}
            </div>
            <div className="temperatur">
              {data.main ? `${Math.floor(data.main.temp)}°` : null}
            </div>
          </div>
          {/* <div className="weather-date">
            <p>Pátek, 19 Prosinec</p>
          </div> */}
          <div className="weather-data">
            <div className="humidity">
              <div className="data-name">Vlhkost</div>
              <i className="fa-solid fa-droplet"></i>
              <div className="data">
                {data.main ? data.main.humidity : null}%
              </div>
            </div>
            <div className="wind">
              <div className="data-name">Rychlost větru</div>
              <i className="fa-solid fa-wind"></i>
              <div className="data">
                {data.wind ? data.wind.speed : null} km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
