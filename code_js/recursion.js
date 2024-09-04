// call Stack
function takeShower(){
  return "Showering";
}

function eatBreakfast(){
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood(){
  let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
  return items[Math.floor(Math.random()*items.length)];
}

function wakeUp(){
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

// wakeUp();

//---------------------------------------------------------------------

// Our first recursive function

function countDown(num){
  if(num <= 0){
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
// countDown(5);


// methode 2
function countDown1(num){
  for(var i = num; i > 0; i--){
    console.log(i);
  }
  console.log("All done!");
}
// console.log(countDown1(5));


// OUr second recursive function -----------------------------
function sumRange(num){
  if(num === 1) return 1;
  return num + sumRange(num -1);
}
// console.log(sumRange(5));



// write factorial code in simple or recursion method
// simple method 
function factorial(num){
  let total = 1;
  for(let i = num; i > 0; i--){
    total *= i;
  }
  return total;
}
// console.log(factorial(4));


// recursive method
function factorial1(num){
  if(num === 1) return 1;
  return num * factorial1(num - 1);
}
// console.log(factorial1(4));


//-----------------------------------------------------------

// Helper method recursion

// function outer(input){
//   var outerScopedVariable = [];

//   function helper(helperInput){
//     // modify the outerScopedVariable
//     helper(helperInput--);
//   }

//   helper(input);

//   return outerScopedVariable;
// }
// console.log(outer(5));


function collectOddValues(arr){
  let result = [];

  function helper(helperInput){
    if(helperInput.length === 0) return;

    if(helperInput[0] % 2 !== 0){
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}
// console.log(collectOddValues([1,2,3,4,5,6,7]));


// pure recursion
function collectOddValues1(arr){
  let newArr = [];

  if(arr.length === 0){
    return newArr;
  }

  if(arr[0] % 2 !== 0){
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues1(arr.slice(1)));
  return newArr;
}
console.log(collectOddValues1([1,2,3,4,5,6,7]));