/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  //conversion code
  var celsius = ((temperature - 32)/1.8).toFixed(1)
  return celsius
}

function convertCelsiusToFahrenheit(temperature) {
  var fahrenheit = (temperature * 1.8 + 32).toFixed(1)
  return fahrenheit
}
