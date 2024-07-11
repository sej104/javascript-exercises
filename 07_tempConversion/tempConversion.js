const convertToCelsius = function(temperature) {
  let temperatureInCelsius = ((temperature - 32) * 5/9);
  let celsiusRounded = Math.round(temperatureInCelsius * 10) / 10;

  return celsiusRounded;
};

const convertToFahrenheit = function(temperature) {
  let temperatureInFahrenheit = (temperature * 9/5 + 32);
  let fahrenheitRounded = Math.round(temperatureInFahrenheit * 10) / 10;
  
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
