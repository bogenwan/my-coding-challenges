/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
*/

function doubleChar(str) {
  // create a array to store new string values
  var newString = [];
  // travers through the string
  for (var i = 0; i < str.length; i++) {
    // push the double letter in to the array
    newString.push(str[i],str[i]);
  }
  //join the letters togather and return the new string
  return newString.join('');
}

console.log(doubleChar('johnny'));