const ftoc = function(fare) {
  let tempCelsius = (fare - 32) * (5/9)
  let celsius = Math.round(tempCelsius * 10) / 10
  return celsius;
};

const ctof = function(cels) {
  let tempFahrenheit = (cels * (9/5) + 32)
  let fahrenheit = Math.round(tempFahrenheit * 10) / 10
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
