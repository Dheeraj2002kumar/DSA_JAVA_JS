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
// console.log(charCount("Hello, World!1111665"));
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
// console.log(charCount1("Hello, World!1111665"));

// method 2
function charCount2(str){
  var obj = {};
  for(var i=0; i<str.length; i++){
    var char = str[i].toLowerCase();
    if(/[a-z 0-9]/.test(char)){
      if(obj[char] > 0) {
        obj[char]++;
    } else {
      obj[char] = 1;
    };
  }
}
return obj;
}

// console.log(charCount2("hello hii!"));

// method 3
function charCount3(str){
  var obj = {};
  for(var char of str){
    if(isAlphaNumeric(char)){
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char){
  var code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alphabate (A-Z)
    !(code > 96 && code < 123)){ // lower alphabate (a-z)
      return false;
    }
    return true;
}
// console.log(charCount3("Hello WORLD hii!!!"));
// console.log("hi".charCodeAt(0));  // 104

//-----------------------------------------------------------------

//  frequency counter pattern

// Write a function colled same, which accepts two arrays, The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same

// same([1, 2, 3], [4, 1, 9]);   // true
// same([, 2, 3], [1, 9]);   // false
// same([1, 2, 1], [4, 4, 1])    // false (must be same frequency)

function same(arr1, arr2){
  if(arr1.length !== arr2.length) return false;
  for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if(correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}
// Time Complexity - N^2
// Space Complexity - N

console.log(same([1, 2, 3], [4, 1, 9]));

// REFACTORED
function same1(arr1, arr2){
  if(arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;
}
// Time Complexity - N
// Space Complexity - N
console.log(same1([1, 2, 3], [4, 1,9]));