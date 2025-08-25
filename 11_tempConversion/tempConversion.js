const convertToCelsius = function(f) {
  const converted = (f-32)*5/9;
  return parseFloat(converted.toFixed(1));
};

const convertToFahrenheit = function(c) {
  const converted = (c*9/5)+32;
  return parseFloat(converted.toFixed(1));
};
// npm test tempConversion.spec.js
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
