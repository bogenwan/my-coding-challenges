/*
Problem 1.1
*/
// const isUnique = (string) => {
//   let state = true
//   let storage = {};
//   if (string.length === 0) {
//     return 'Please input a string with length > 0'
//   }
//   for (var i = 0; i < string.length; i++) {
//     if (storage.hasOwnProperty(string[i])) {
//       return state = false
//     } else {
//       storage[string[i]] = 0;
//     }
//   }
//   return state;
// };

// solution without using object data structure to store
const isUnique = (string) => {
  let state = true;
  if (string.length === 0) {
    return 'Please input a string with length > 0';
  }
  for (var i = 0; i < string.length; i++) {
    // second loop to check of any other character are the same as i
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return state = false;
      }
    }
  }
  return true;
};
// console.log(isUnique('worldaksuij'));

/*
Problem 1.2
*/
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

const URLify = function (string, strLength) {
  if (string.length === 0 || arguments.length === 1) {
    return 'Please input strings with length > 0 and string length as second ';
  }
  let strArray = string.split('');
  let spaceCount = 0;
  for (var i = 0; i < strLength; i++) {
    if (strArray[i] === ' ') {
      spaceCount++;
    }
  }
  let neededLength = strLength + spaceCount * 2;
  for (var j = strLength -1; j >= 0; j--) {
    if (strArray[j] !== ' ') {
      strArray[neededLength -1] = strArray[j];
      neededLength--;
    } else {
      strArray[neededLength -1] = '0';
      strArray[neededLength -2] = '2';
      strArray[neededLength -3] = '%';
      neededLength -= 3;
    }
  }
  return strArray.join('');

};