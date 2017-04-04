/*
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task

Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.

isSquare(-1) // => false
isSquare( 3) // => false
isSquare( 4) // => true
isSquare(25) // => true
isSquare(26) // => false
*/

// added note after problem solved: first square root the number then check if number is interger.

var isSquare = function(n){
  // set first edge case where if number is negative, then return false
  if (n < 0) {
    return false;
  }
  // set second edge case if the square root of the number is not a interger
  if (Math.sqrt(n) % 1 !== 0) {
    return false;
  }
  // find the square root of the number then multiply by it self
  if (Math.sqrt(n) * Math.sqrt(n) === n) {
    // if product of it's square root is equal the input number then it is a square number
    return true;
  } else {
    // otherwise it is not a square number and return false
    return false;
  }
}
