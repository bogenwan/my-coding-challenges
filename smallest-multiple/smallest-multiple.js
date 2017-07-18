/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

// helper function to check if current number is dividible
const divisibleChecker = (number, divider) => {
  if (number % divider === 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(divisibleChecker(110, 2));

// helper to check if all true in the array
const checkAllTrue = (array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== true) {
      return false;
    }
  }
  return true;
};
// console.log(checkAllTrue(list));

const smallestMultiple = (fromNum, toNum) => {
  let answer;
  // result array[0] is true because we can skip 0
  let resultList = [true];
  for (var i = 1; answer === undefined; i++) {
    for (var j = fromNum; j <= toNum; j++) {
      if (divisibleChecker(i, j)) {
        resultList[j] = true;
      } else {
        resultList[j] = false;
      }
    }
    if (checkAllTrue(resultList)) {
      answer = i;
    } else {
      answer = undefined;
    }
  }
  return answer;
};
// console.log(smallestMultiple(1, 20));