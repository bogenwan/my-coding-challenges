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
// console.log(isUnique('world'));

const checkPermutation = (str1, str2) => {
  let state = true;
  let storage = {};
  if (str1.length === 0 || str2.length === 0) {
    return 'Please input strings with length > 0';
  }
  if (str1.length !== str2.length) {
    return state = false;
  }
  for (var i = 0; i < str1.length; i++) {
    if (!storage.hasOwnProperty(str1[i])) {
      storage[str1[i]] = 1;
    } else {
      storage[str1[i]] = storage[str1[i]] +1;
    }
  }
  for (var j = 0; j < str2.length; j++) {
    if (!storage.hasOwnProperty(str2[j])) {
      return state = false;
    } else {
      storage[str2[j]] = storage[str2[j]] -1;
      if (storage[str2[j]] < 0) {
        return state = false;
      }
    }
  }
  return state;
};
// console.log(checkPermutation('wworwd', 'wworww'));