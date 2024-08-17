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

// console.log(same([1, 2, 3], [4, 1, 9]));

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
// console.log(same1([1, 2, 3], [4, 1,9]));


//--------------------------------------------------------------------
// ANAGRAMS
//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// validAnagram('', ''); // true
// validAnagram('aaz', 'zza'); // false
// validAnagram('anagram', 'nagaram'); // true
// validAnagram('rat', 'car');   // false
// validAnagram('awesome', 'awesom'); // false
// validAnagram('qwerty', 'qeywrt');   // true
// validAnagram('texttwisttime', 'timetwisttext'); // true

function validAnagram(first, second){
  if(first.length !== second.length) return false;
  const lookup = {};

  for(let i = 0; i < first.length; i++){
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for(let i = 0; i < second.length; i++){
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    // if letter exists, decrement, otherwise return false
    if(!lookup[letter]){
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
// Time Complexity: N
// Space Complexity: N
// console.log(validAnagram('aaz', 'zza')); // false
// console.log(validAnagram('anagram', 'nagaram')); // true


//---------------------------------------------------------------
// MULTIPLE POINTERS
// creating pointers or values that correspond to an 
// index or position and move towards the beginnig, 
// end or middle based on a certain condition

// Very efficient for solving problems 
// with minimal space complexity as well

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero([-3, -2, -1, 0, 1, 2, 3]);    // [-3, 3]
// sumZero([-2, 0, 1, 3]);   // undefined
// sumZero([1, 2, 3]);   // undefined

// NAIV SOLUTION
function sumZero(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));


// REFACTOR
function sumZero1(arr){
  let left = 0;
  let right = arr.length -1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    } else if(sum > 0){
      right--;
    } else {
      left++;
    }
  }
}
// Time Complexity: O(n)
// Space Complexity: O(1)
// console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero1([-2, 0, 1, 3]));



//----------------------------------------------------------------

// CountUniqueValues
//Implement a function called countUniqueValues, hich accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqeValues([1, 1, 1, 1, 1, 2]);  // 2
// countUniqeValues([1, 2, 3,4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqeValues([]); // 0
// countUniqeValues([-2, -1, -1, 0, 1]);  // 4

function countUniqeValues(arr){
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
    // console.log(i, j);  // this will show the position of i and j
  }
  return i + 1;
}
// Time complexity: O(N)
// Space complexity: O(1)
console.log(countUniqeValues([1, 1, 1, 1,2]));
console.log(countUniqeValues([1, 2, 3, 3, 5, 5, 8, 9]));
