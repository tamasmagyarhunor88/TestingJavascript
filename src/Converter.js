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

function convertPoundsToKilos(weight) {
  var kilos = (weight * 0.4536).toFixed(1)

  return kilos
}

function convertKilosToPounds(weight) {
  var pounds = (weight * 2.20462262).toFixed(1)

  return pounds
}

function convertLiterToGallons(liquid) {
  var gallons = (liquid * 0.22).toFixed(1)

  return gallons
}

function convertGallonsToLitres(liquid) {
  var litres = (liquid * 4.54609188).toFixed(1)

  return litres
}
