/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

const findMultiplesOf3and5 = function (number) {
  // create a variable that will be the sum
  let sum = 0;
  //if number is 0 just return 0
  if (number === 0) {
    return 'none';
  }
  // iterate through the amount of number
  while (number > 0) {
    // first make sure number can be divided by 3 and 5 that equal 0
    if (number % 3 === 0 || number % 5 === 0) {
      // can be divided by 3 and 5 then add that number to the sum
      sum = sum + number;
    }
    number--;
  }
  // return the sum to user
  return sum;
};

//console.log(findMultiplesOf3and5(999));