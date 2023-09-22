// Math Algorithms
// Fibonacci Sequence

// Iterative solution
function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibonacci(6));

// Recursive solution
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// console.log(recursiveFibonacci(6));

// Factorial of a Number

// Iterative solution
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(5))

// Recursive solution
function recursiveFactorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// console.log(recursiveFactorial(5))

// Prime Number

// Iterative solution
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(4))

// Recursive solution
function recursiveIsPrime(n) {
  return checkPrime(n, 2);
}

function checkPrime(n, i) {
  if (n < 2) {
    return false;
  }
  if (i === n) {
    return true;
  }
  if (n % i === 0) {
    return false;
  }
  return checkPrime(n, i + 1);
}

// console.log(recursiveIsPrime(4))

// Power of Two

// Iterative solution
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// console.log(isPowerOfTwo(4))

// Recursive solution
function recursiveIsPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  if (n === 1) {
    return true;
  }
  return recursiveIsPowerOfTwo(n / 2);
}

// console.log(recursiveIsPowerOfTwo(4))

// Search Algorithms
// Linear Search

// Iterative solution
function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (t === arr[i]) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([-5, 2, 10, 4, 6], 1))

// Recursive solution
function recursiveLinearSearch1(arr, t, i = 0) {
  if (i >= arr.length) {
    return -1;
  }
  if (t === arr[i]) {
    return i;
  }
  return recursiveLinearSearch1(arr, t, i + 1);
}

// console.log(recursiveLinearSearch1([-5, 2, 10, 4, 6], 6))

function recursiveLinearSearch2(arr, t) {
  return search1(arr, t, 0);
}

function search1(arr, t, i) {
  if (i > arr.length) {
    return -1;
  }
  if (t === arr[i]) {
    return i;
  }
  return search1(arr, t, i + 1);
}

// console.log(recursiveLinearSearch2([-5, 2, 10, 4, 6], 6))

// Binary Search

// Iterative solution
function binarySearch(arr, target) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
  }
  return -1;
}

// console.log(binarySearch([-5, 2, 4, 6, 10], 10))

// Recursive solution
function recursiveBinarySearch(arr, t) {
  return search2(arr, t, 0, arr.length - 1);
}
function search2(arr, t, firstIndex, lastIndex) {
  if (firstIndex > lastIndex) {
    return -1;
  }
  let middleIndex = Math.floor((lastIndex + firstIndex) / 2);
  if (t === arr[middleIndex]) {
    return middleIndex;
  }
  if (t > arr[middleIndex]) {
    return arr, t, middleIndex + 1, lastIndex;
  } else {
    return arr, t, firstIndex, middleIndex - 1;
  }
}

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 2))

// Sorting Algorithms
// Bubble Sort

function bubbleSort(arr) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }
  } while (swap);
}

// const arr1 = [-6, 20, 8, -2, 4]
// bubbleSort(arr1)
// console.log(arr1)

// Insertion Sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let elementToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > elementToInsert) {
      arr[j + 1] = arr[j];
      j = i - 1;
    }
    arr[j + 1] = elementToInsert;
  }
}

// const arr2 = [-6, 20, 8, -2, 4]
// bubbleSort(arr2)
// console.log(arr2)

// Quick Sort

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivotElement = arr[arr.length - 1];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElement) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)];
}

// const arr3 = [-6, 20, 8, -2, 4]
// console.log(quickSort(arr3))

// Merge Sort

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middleElement = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, middleElement);
  let rightArray = arr.slice(middleElement);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  let sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

// const arr4 = [-6, 20, 8, -2, 4]
// console.log(mergeSort(arr4))

// Miscellaneous Algorithms
// Cartesian Product

function cartesianProduct(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

// const arr1 = [1, 2];
// const arr2 = [2, 3, 4];
// console.log(cartesianProduct(arr1, arr2));

// Climbing Staircase

function climbingStaircase(n) {
  let noOfways = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfways[i] = noOfways[i - 1] + noOfways[i - 2];
  }
  return noOfways[n - 1];
}

// console.log(climbingStaircase(5))

// Tower of Hanoi

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

// console.log(towerOfHanoi(2, "A", "C", "B"));
