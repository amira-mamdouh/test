"use strict";

(async function () {
  var response = await fetch(
    "http://api.weatherapi.com/v1/search.json?key=dd3542d0f43d4b0dbfd192925241501&q=lond"
  );
  var final = await response.json();
  console.log(final);
})();
