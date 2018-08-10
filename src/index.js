//import { filter } from "./arrayHelper";

export const getLengthOfArray = array => {
  return array.length;
};

//Creates a new array based on whether the items of an array pass a certain condition.
export const filter = (array, searchTerm) => {
  return array.filter(arrayElement => {
    return arrayElement === searchTerm;
  });
};

// ************** TEST CODE **************//
// 1. Array length
const citiesArray = ["London", "Paris", "New York", "London"];
console.log(`Length of an array is ${getLengthOfArray(citiesArray)}`);

// 2. Filter - return a new array which matches the search term
console.log(`New array contains ${filter(citiesArray, "London")}`);
