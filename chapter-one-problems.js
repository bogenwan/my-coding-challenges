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

// console.log(URLify('Mr John Smith    ', 13));

const palinPermu = function (str) {
  var state = true;
  var storage = {};
  var oddCount = 0;
  if (str.length === 0) {
    return 'please enter a string with length more then 0'
  }
  var lwrStr = str.toLowerCase();
  // remove white spaces
  lwrStr = lwrStr.replace(/\s/g, '');
  strArr = lwrStr.split('')
  for (var j = 0; j < strArr.length; j++) {
    if (storage[strArr[j]] === undefined) {
      storage[strArr[j]] = 1;
    } else {
      storage[strArr[j]]+= 1;
    }
  }
  for (var key in storage) {
    if (storage[key] % 2 !== 0) {
      oddCount ++
      if (oddCount >= 2) {
        return state = false;
      }
    }
  }
  return state;
};
// console.log(palinPermu('Ta ct Coa ff gg'));

const oneAway = function (str1, str2) {
  var state = true;
  var strLengthDiff = str1.length - str2.length;

  function isReplacedOnce (first, second) {
    let answer = true;
    let counter = 0;
    for (var i = 0; i < first.length && counter < 2; i++) {
      if (first[i] !== second[i]) {
        counter++;
      }
    }
    if (counter === 2) {
      answer = false;
    }
    return answer
  };

  if (strLengthDiff === 0 && isReplacedOnce(str1, str2) === false) {
    state = false;
  }

  if (Math.abs(strLengthDiff) > 1) {
    state = false;
  }
  return state;
};
// console.log(oneAway('pale', 'ple'))

const stringCompress = function (str) {
  var storage = {};
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if(storage[str[i]] === undefined) {
      storage[str[i]] = 1;
    } else {
      storage[str[i]] = storage[str[i]] + 1;
    }
  }
  for (key in storage) {
    result = result + key + storage[key]
  }
  return str.length > result.length ? result : str;
};
// console.log(stringCompress('aabbcc'))

const twoByTwoMatrix = [
[1, 2],
[3, 4]
];

const threeByThreeMatrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]

const fourByFourMatrix = [
[ 1,  2,  3,  4],
[ 5,  6,  7,  8],
[ 9, 10, 11, 12],
[13, 14, 15, 16]
];

const rotateMatrix = function (matrix) {
  let last = matrix.length - 1;
  let layer = matrix.length / 2;
  var swap = function (a, b) {
    let temp = a;
    a = b;
    b = temp;
  };

  for (var i = 0; i < last; i++) {
    // save lt upper to temp
    var temp = matrix[i][i]
    //  assign lt lower to lt upper
    matrix[i][i] = matrix[last][i];
    // assign rt lower to lt lower
    matrix[last][i] = matrix[last][last];
    // assign rt upper to rt lower
    matrix[last][last] = matrix[i][last];
    // assign temp to rt upper
    matrix[i][last] = temp;
  }

  return matrix;
};
console.log(rotateMatrix(threeByThreeMatrix));
// console.log(rotateMatrix(threeByThreeMatrix));
// console.log(rotateMatrix(fourByFourMatrix));

// function rotateMatrix(matrix) {
//   var min = 0;
//   var max = matrix.length - 1;

//   while (min < max ) {
//     var temp1 = [];
//     var temp2 = [];
//     for (var i = min; i < max; i++) {
//       // Top
//       temp1 = matrix[i][max];
//       matrix[i][max] = matrix[min][i];

//       // Right
//       temp2 = matrix[max][max - i + min] // Can only reach the max if you add back the min to i
//       matrix[max][max - i + min] = temp1;
//       // Bottom
//       temp1 = matrix[max - i + min][min];
//       matrix[max - i + min][min] = temp2;
//       // Left
//       matrix[min][i] = temp1;
//     }
//     min++;
//     max--;
//   }

//   return matrix;
// }
// console.log(rotateMatrix(fourByFourMatrix))