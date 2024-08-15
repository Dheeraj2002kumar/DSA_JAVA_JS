//Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
// // method 1
function addUpTo_1(n){
  let total = 0;
  for(let i = 1; i <= n; i++){
    total += i;
  }
  return total;
}

// console.log(addUpTo_1(6));

// method 2
function addUpTo_2(n){
  return n * (n + 1) / 2;
}

// console.log(addUpTo_2(6));


// add1_timing
function add1_timing(n){
  let total = 0;
  for(let i = 1; i <= n; i++){
    total += 1;
  }
  return total;
}

// var t1 = performance.now();
// add1_timing(10000000000);
// var t2 = performance.now();
// console.log(`Time Elased: ${(t2 - t1) / 1000} seconds.`);

function add2_timing(n){
  return n * (n + 1) /2;
}

// var time1 = performance.now();
// add1_timing(10000000000);
// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);


function countUpAndDown(n){
  console.log("Going up!");
  for(let i = 0; i <= n; i++){
    console.log(i);
  }

  console.log("At the top! \n Going down...");
  for(let j = n-1; j >= 0; j--){
    console.log(j);
  }
  console.log("Back down. Bye!");
}

// countUpAndDown(10);


function printAllPairs(n){
  for(var i = 0; i < n; i++){
  
    for (var j = 0; j < n; j++){
      console.log(i, j);
    }
  
  }
}
// printAllPairs(3);


function logAtLeast5(n){
  for (var i = 1; i <= Math.max(5, n); i++){
    console.log(i);
  }
}

// console.log(100)

function logAtMost5(n){
  for(var i = 1; i <= Math.min(5, n); i++){
    console.log(i);
  }
}

// console.log(10);


function sum(arr){
  let total = 0;

  for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;

}
// console.log(sum([1, 2, 3, 4, 5])); 


function double(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
// console.log(double([1,2,3,4]));


//------------------------------------------------------------

// Objects

let instructor = {
  firstName: "Dheeraj",
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}
// console.log(instructor);
// console.log(instructor.firstName);
// console.log(instructor.isInstructor);
// console.log(instructor.favoriteNumbers);

// console.log(Object.keys(instructor));
// console.log(Object.entries(instructor));
// console.log(instructor.hasOwnProperty("firstName"));
console.log(Object.values(instructor));