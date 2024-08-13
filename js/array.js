// Create prinArray function
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// var array = [5, 1, 2, 9, 10];
// printArray(array);

//--------------------------------------------

// 1Q. Given an array of integers, return an array with even integers removed.
function removeEven(arr) {
  let oddCount = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i]%2 != 0){
      oddCount++;
    }
  }
  let oddArray = new Array(oddCount);
  var idx = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i]%2 != 0){
      oddArray[idx] = arr[i];
      idx++;
    }
  }
  return oddArray;
}
      
// var arr = [3, 2, 4, 7, 10, 6, 5];  //3, 7, 5
// console.log(removeEven(arr));

// printArray(arr);
// var result = removeEven(arr);
// printArray(result);



// --------------------------------------------------------

  // Q2. Given an array or string, the task is to reverse the  array or string

function reverse(numbers, start, end){
  while(start < end){
    let temp = numbers[start];
    numbers[start] = numbers[end];
    numbers[end] = temp;
    start++;
    end--;
  }
}

// var numbers = [2, 11, 5, 10, 7, 9];
// console.log(numbers);
// reverse(numbers, 0, numbers.length-1);
// console.log(numbers);

// var string = ['raj', 'kumar', 'niraj'];
// console.log(string);
// reverse(string, 0, string.length-1);
// console.log(string);

//