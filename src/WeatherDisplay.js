import React from "react";

const WeatherIcon = ({ weatherMain }) => {
    let imagePath;
  
    switch (weatherMain) {
      case 'Clear':
        imagePath = require('./image/clear.png');
        break;
      case 'Clouds':
        imagePath = require('./image/cloudy.png');
        break;
      case 'Rain':
        imagePath = require('./image/rain.png');
        break;
      case 'Snow':
        imagePath = require('./image/snow.png');
        break;
      case 'Thunderstorm':
        imagePath = require('./image/Thunderstorm.png');
        break;
      case 'Drizzle':
        imagePath = require('./image/Drizzle.png');
        break;
      case 'Mist':
        imagePath = require('./image/Mist.png');
        break;
      case 'Smoke':
        imagePath = require('./image/Smoke.png');
        break;
      case 'Haze':
        imagePath = require('./image/Haze.png');
        break;
      default:
        break;
    }
  
    return (
      <div className='sky' style={{display:'flex', alignItems: 'center',justifyContent: 'center'}}>
        {/* 이미지를 화면에 출력하려면 <img> 태그를 사용합니다. */}
        {imagePath && <img src={imagePath} alt={weatherMain} width={100} height={100}/>}
      </div>
    );
  };
  
  export default WeatherIcon;