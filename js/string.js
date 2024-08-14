//Q8. Given a string, the task is check whether given string is palindrome or not.
function isPalindrome(word){
  // let reversedWord = word.split("").reverse().join("");
  // return word === reversedWord;

  charArray = word.split("");
  let left = 0;
  let right = charArray.length - 1;
  while (left < right) {
    if (charArray[left] !== charArray[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

if(isPalindrome("madam")){
  console.log("The string is a palindrome");
} else {
  console.log("The string is not a palindrome");
}

//---------------------------------------------------------------------

//Q9. Given a string, the task is to check whether given string is anagram of 
// another string or not.
function isAnagram(str1, str2) {
  // if(str1.length !== str2.length) return false;
  // let charArray1 = str1.split("");
  // let charArray2 = str2.split("");
  // charArray1.sort();
  // charArray2.sort();
  // return charArray1.join("") === charArray2.join("");
  let charArray1 = str1.split("");
  let charArray2 = str2.split("");
  charArray1.sort();
  charArray2.sort();
  return JSON.stringify(charArray1) === JSON.stringify(charArray2);
  }

