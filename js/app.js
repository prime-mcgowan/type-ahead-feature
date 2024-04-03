const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
// console.log(cities);

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    //figure out if city or state matches search
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
