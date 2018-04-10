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
});
