// Checks to see if user typed correct city, if not trys to match it
function getCity(userCity) {
  const cities = ["London", "Paris", "New York"];

  const result = cities.forEach(city => {
    if (city.toLowerCase() === userCity.toLowerCase()) {
      // do something at databse
      console.log("Found");
      return;
    }
    // Close match
    if (city.toLowerCase().match(userCity.toLowerCase())) {
      console.log(`Did you mean ${city}?`);
    }
  });
}
