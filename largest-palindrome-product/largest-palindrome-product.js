/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// helper function to check if number is palindrome
const numIsPalindrome = (num) => {
  if (num === 0 || String(num).length <= 1) {
    return false;
  }
  let stringNum = num + '';
  stringNum = Number(stringNum.split('').reverse().join(''));
  return stringNum === num ? true: false;
};
// console.log(numIsPalindrome(123321))

// helper function to check number length
const checkNumLength = (num) => {
  let stringNum = num + '';
  return stringNum.length;
};
// console.log(checkNumLength(17382893472938789))

const largestPalindromeProduct = (digit) => {
  // use 9 and repeat the amount of digit that user specifies then convert it to number
  let maxNum = Number('9'.repeat(digit));
  let storage = [ ];
  for (var i = 0; i <= maxNum; i++) {
    for (var j = 0; j <= maxNum; j++) {
      let product = i * j;
      if (numIsPalindrome(product)) {
        storage.push(product);
      }
    }
  }
  return Math.max.apply(this, storage);
};

// console.log(largestPalindromeProduct(3))