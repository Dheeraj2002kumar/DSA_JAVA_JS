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

var time1 = performance.now();
add1_timing(10000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);


