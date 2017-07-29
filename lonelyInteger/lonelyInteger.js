/*
an array if interger that all is in a pair except for 1 interger that is alone

we also know that the length or array is always odd number
*/

function lonelyInteger(arr) {
  var lonelyNum = 0;
  if (arr.length === 1) {
      lonelyNum = arr[0];
  }
  // we know n which is array length is always odd number so we know every pair will have a lonely number at the end is it if an odd number array
  for (var i = 2; i < arr.length; i +=2) {
      var firstNum = arr[i - 2];
      var secNum = arr[i - 1];
      if(firstNum !== secNum && secNum === arr[i]) {
          return lonelyNum = firstNum;
      } else {
          lonelyNum = arr[i];
      }
  }
  return lonelyNum;
}
// console.log(lonelyInteger([1, 1, 2, 2, 3, 4, 4, 5]))