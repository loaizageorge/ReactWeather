var React = require('react');

var WeatherMessage = ({temp,location}) =>{

  return(
    <div>
      <h3>Weather Information</h3>
      <h3>It is {temp} degrees in {location} </h3>
    </div>
  );
}

module.exports = WeatherMessage;
