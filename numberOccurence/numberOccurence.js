var numberOccurance = function (A, B) {
  let strB = B.toString(), strA = A.toString(), result = strB.indexOf(strA)
  return result;
};

console.log(numberOccurance(53, 195353));