describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100);
      expect(result).toEqual('37.8');

      result = convertFahrenheitToCelsius(90);
      expect(result).toEqual('32.2');
    });

    it("Celsius to Fahrenheit", function() {
      var result = convertCelsiusToFahrenheit(35);

      expect(result).toEqual('95.0');
    })
  });

  describe("Weight", function () {
    it("Pounds to Kilos", function() {
      var result = convertPoundsToKilos(100);
      expect(result).toEqual('45.4')

      result = convertPoundsToKilos(135);
      expect(result).toEqual('61.2')
    })

    it("Kilos to Pounds", function() {
      var result = convertKilosToPounds(243);

      expect(result).toEqual('535.7')
    })
  })

  describe("LiquidVolume", function () {
    it("Litre to Gallons", function () {
      var result = convertLiterToGallons(73.6)

      expect(result).toEqual('16.2')
    })

    it("Gallons to Litres", function () {
      var result = convertGallonsToLitres(34)

      expect(result).toEqual('154.6')
    })
  })
});
