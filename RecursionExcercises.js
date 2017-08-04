//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

//2. Next, try looping just like above except using recursion

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse


//1 && 2
function loop (n) {
  while (n > 0) {
    console.log(n)
    n--
  }
}

loop(10)


function recursiveloop (n) {
  while (n > 0) {
    console.log(n)
    return recursiveloop(n-1)
  }
}

recursiveloop(10)

//3 && 4
function exponentloop (base, exponent) {
  var total = 1;
  while (exponent > 0) {
    total *= base
    exponent--
  }
  return total;
}

function recursiveexponent (base, exponent) {
  if (exponent === 1) {
    return base
  }
  return base * recursiveexponent(base, exponent-1)
}


//5 && 6
var recursiveMultiplier = function(arr, num) {
  if(arr.length === 0){
    return arr;
  }
  var last = arr.pop();
  recursiveMultiplier(arr, num);
  arr.push(last * num);
  return arr;
}

recursiveMultiplier([1,2,3,4,5], 2)

function recursiveMultiplier (arr, num) {
  var newArr = [];
    var addItems = function (orderedArr, n) {
      if (orderedArr.length === 0) {
        return orderedArr;
      }
      newArr.push(orderedArr.shift() * num)
      addItems(orderedArr)
    }
    addItems(arr, num)
  return newArr;
}

recursiveMultiplier([1,2,3,4,5], 2)


function recursiveReverse (arr) {
  if (arr.length === 0) {
    return arr;
  }
  var first = arr.shift();
  recursiveReverse(arr);
  arr.push(first);
  return arr
}

function recursiveReverse (arr) {
  var newArr = [];
    var addItems = function (orderedArr) {
      if (orderedArr.length === 0) {
        return orderedArr
      }
      newArr.push(orderedArr.pop())
      addItems(orderedArr)
    };
    addItems(arr)
  return newArr;
}

recursiveReverse([2,3,4])