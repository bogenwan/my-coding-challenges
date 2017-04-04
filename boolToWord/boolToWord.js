/*
Complete the bool_to_word (Javascript: boolToWord ) method.

Given: a boolean value

Return: a 'Yes' string for true and a 'No' string for false
*/

function boolToWord( bool ){
  // check if input is true
  if (bool === true) {
    // if it is true then return YES
    return 'Yes';
  }
  if (bool === false) {
    // if it is false then return NO
    return 'No';
  }
}
