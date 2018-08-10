// ************** TEST CODE **************//

const citiesArray = ["London", "Paris", "New York", "London"];

// SEARCHING METHODS
//  INCLUDES: This method check if array includes the item passed in the method.
const doesIncludeBool = citiesArray.includes("London");
console.log(
  "Using INCLUDES (search) to check if London is there - " + doesIncludeBool
);

// 'SOME',  Checks if any item in array passes a condition then returns true and ends
const doesArrayContainLetterO = citiesArray.some(
  city => city.indexOf("o") > -1
);
console.log(
  `Using SOME to check if any element contains letter o, will return true and exit loop -  ${doesArrayContainLetterO}`
);

// 'EVERY',  loops through every element and all must pass the condition or returns false and finisheds
const isAllArrayElementsLengthLongerThanTwoChars = citiesArray.every(
  city => city.length > 5
);
console.log(
  `Using EVERY to check if all elements string length is bigger than 5,   -  ${isAllArrayElementsLengthLongerThanTwoChars}`
);

// TRANSFORMATION METHODS

// SORT - mutates the array so watch it!
const alpha = ["e", "a", "c", "u", "y"];
let sortedArrayDesc = [...alpha];
sortedArrayDesc.sort((a, b) => (a > b ? -1 : 1));

let sortedArrayAsec = [...alpha];
sortedArrayAsec.sort((a, b) => (a > b ? 1 : -1));
console.log(alpha);
console.log(sortedArrayDesc);
console.log(sortedArrayAsec);

// FILTER - return a new array which matches the search term
const filteredArray = citiesArray.filter(city => city === "London");
console.log(`New array contains ${filteredArray}`);

//  MAP used to return a transformed new array
const transformedNewArray = citiesArray.map(city => city + " - Capital");
console.log(transformedNewArray);
