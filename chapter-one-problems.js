/*
Problem 1.1
*/
const isUnique = (string) => {
  let state = true
  let storage = {};
  if (string.length === 0) {
    return 'Please input a string with length > 0'
  }
  for (var i = 0; i < string.length; i++) {
    if (storage.hasOwnProperty(string[i])) {
      return state = false
    } else {
      storage[string[i]] = 0;
    }
  }
  return state;
}

console.log(isUnique(''));