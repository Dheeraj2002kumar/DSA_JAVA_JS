//Algorithms_and_Problem_solving_patterns

// Write a function which takes in a string and returns counts of each character in the string.
function charCount(str) {
  let charCountDict = {};
  for (let char of str) {
    if (char in charCountDict) {
      charCountDict[char] += 1;
    } else {
      charCountDict[char] = 1;
    }
  }
  return charCountDict;
}
// Test the function
console.log(charCount("Hello, World!1111665"));
// Output: { H: 1, e: 1, l: 3, 

function charCount1(str){
  // make object to return at end
  let result = {};
  // loop over string, for each character...
  for(var i=0; i < str.length; i++){
    var char = str[i].toLowerCase();
    // if the char is a number/letter AND is a key in object, add one to count
    if(result[char] > 0){
      result[char]++;
    }
    // if the char is a number/ letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }

  }
      // if character is something else (space, period, etc.) don't do anything
    // return object at end
    return result;
}
// Test the function
console.log(charCount1("Hello, World!1111665"));