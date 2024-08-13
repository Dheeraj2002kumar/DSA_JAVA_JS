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


//--------------------------------------------------

//Q3. Find Minimum value in Array
function findMin(arr){
  var min = arr[0];
  for(var i=1; i<arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

// var arr = [5, 9, 3, 15, 1, 2];
// console.log(findMin(arr)); // 1

//----------------------------------------------

//Q4. Given an array of integers, return second maximum value. The secondd maximum value exists.
function findSecondMax(arr){
  var max = Number.MIN_SAFE_INTEGER;
  var secondMax = Number.MIN_SAFE_INTEGER;
  for(var i=0; i<arr.length; i++){
    if(arr[i] > max){
      secondMax = max;
      max = arr[i];
    }
    else if(arr[i] > secondMax && arr[i] != max){
      secondMax = arr[i];
    }
  }
  return secondMax;
}

// var array = [13, 34, 2, 34, 33, 1];
// console.log(array);
// console.log(findSecondMax(array)); // 33

//------------------------------------------------------------