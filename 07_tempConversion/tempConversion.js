const convertToCelsius = function(farTemp) {
  const toCel = (farTemp -32) *5 /9;

  if (toCel === Math.floor(toCel)) {
    return parseFloat(toCel.toFixed(0));
  }
  return parseFloat(toCel.toFixed(1));
};

const convertToFahrenheit = function(celTemp) {
  const toFar = celTemp * 9 / 5 + 32;

  if (toFar === Math.floor(toFar)) {
    return parseFloat(toFar.toFixed(0));
  }
  return parseFloat(toFar.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


console.log(convertToCelsius(100));