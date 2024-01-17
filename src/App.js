import React, { useState ,useEffect} from 'react';
import './style.css';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const MyKey = 'a26395a8d19fb710288baa575606ee6e';
  const [area, setArea] = useState("");
  const [result, setResult] = useState({});
  const [weatherMain, setWeatherMain] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${MyKey}`;

  const handleSetArea = (event) => {
    setArea(event.target.value);
  }
  const pressEnter = async (event) => {
    if (event.key === 'Enter') {
      try {
        const data = await axios({
          method: 'get',
          url: url
        })
        console.log(data);
        setResult(data);

      } catch (error) {
        alert('');
      }
    }
  };

  useEffect(() => {
    if (Object.keys(result).length !== 0) {
      setWeatherMain(result.data.weather[0].main);
    }
  }, [result]);
  return (
    <div className="App">
      <div className='container'>
        <input type='text' placeholder='지역을 입력해주세요.'
          value={area} onChange={handleSetArea}
          onKeyDown={pressEnter} />

        {Object.keys(result).length !== 0 && (
          <React.Fragment>
            <WeatherDisplay weatherMain={weatherMain} />
            <div className='sky'>{result.data.weather[0].main}</div>
            <div className='city'>{result.data.name}</div>
            <div className='temp'>{(result.data.main.temp - 273.15).toFixed(2)}°C</div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;

