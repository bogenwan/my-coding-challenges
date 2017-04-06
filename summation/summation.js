/*
Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
  // set a sum variable to equal 0
  var sum = 0;
  // set base condition if num is still larger then 0
  while (num > 0) {
    // add sum to the current number
    sum = sum + num;
    // decrease the num by 1
    num--;
  }
  // return end result to user
  return sum
}

// smart solution after submit
// use the highest number multiply itself +1 then divide by 2 will give you the exact number

// const summation = n => n * (n + 1) / 2;
