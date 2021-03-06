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

const fiveByFiveMatrix = [
[ 1,  2,  3,  4,  5],
[ 6,  7,  8,  9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20],
[21, 22, 23, 24, 25]
]

const rotateMatrix = function (matrix) {
  if (matrix.length === 1 || 0) {
    return matrix;
  }
  let totalLayers = matrix.length / 2;
  // iterate through each layer
  for (var currentLayer = 0; currentLayer < totalLayers; currentLayer++) {
    // iterate through each element in layer
    var begin = currentLayer;
    // use matrix length minus current layer to access matrix diagonally
    var end = matrix.length - currentLayer - 1;
      var counter = 0;
    for (var i = begin; i < end; i++) {
      // memorize top left
      var temp = matrix[begin][i];
      // bottom left to top left
      matrix[begin][i] = matrix[end - counter][i - counter];
      // bottom right to bottom left
      matrix[end - counter][i - counter] = matrix[end][end - counter];
      // top right to bottom right
      matrix[end][end - counter] = matrix[begin + counter][end];
      matrix[begin + counter][end] = temp;
      counter++
    }
  }
  return matrix;
};
// console.log(rotateMatrix(twoByTwoMatrix));
// console.log(rotateMatrix(threeByThreeMatrix));
// console.log(rotateMatrix(fourByFourMatrix));
// console.log(rotateMatrix(fiveByFiveMatrix));

const testMatrix2x2 = [[1, 0], [1, 1]];
const testMatrix3x4 = [
[1, 1, 1],
[1, 0, 1],
[1, 1, 1],
[1, 1, 0]
];
const testMatrix5x4 = [
[1, 1, 1, 1, 0],
[1, 1, 1, 1, 1],
[1, 1, 0, 1, 1],
[0, 1, 1, 1, 1]
];

const zeroMatrix = function (matrix) {
  let positionHash = {};
  if (matrix.length === 0) {
    return [];
  }
  // function to set all selected roll to zero
  const rollZerorify = function (columnNum) {
    let endOfRoll = matrix.length -1;
    while (endOfRoll >= 0) {
      matrix[endOfRoll][columnNum] = 0;
      endOfRoll--;
    }
  };
  // function to set all selected column to zero
  const columnZerorify = function (rollNum) {
    let endOfColumn = matrix[rollNum].length -1;
    while (endOfColumn >= 0) {
      matrix[rollNum][endOfColumn] = 0;
      endOfColumn--;
    }
  };

  for (var roll = 0; roll < matrix.length; roll++) {
    for (var column = 0; column < matrix[roll].length; column++) {
      if (matrix[roll][column] === 0) {
        positionHash[roll] = column;
      }
    }
  }

  for (var key in positionHash) {
    columnZerorify(key);
    rollZerorify(positionHash[key]);
  }
  return matrix;
};
// console.log(zeroMatrix(testMatrix5x4));

const stringRotation = function (str1, str2) {
  let state = true;
  let sortedString1 = str1.split('').sort().join('');
  let sortedString2 = str2.split('').sort().join('');
  let stringArray2 = str2.split('');

  if(sortedString2 !== sortedString1) {
    state = false;
  }
  let head;
  let tail;
  let newString;

  for (let i = 0; i < stringArray2.length; i++) {
    if ( stringArray2[i] === str1[0]) {
      let head = stringArray2.slice(0, i);
      let tail = stringArray2.slice(i);
      newString = tail.concat(head).join('');
      break;
    }
  }
  return newString === str1 ? state = true : state = false;
};
// console.log(stringRotation('waterbottle', 'bottlewater'));

const otherStringRotation = function (str1, str2) {
  let fullStringRotation = str1 + str1;
  let answer = fullStringRotation.includes(str2);
  return answer;
};
// console.log(otherStringRotation('waterbottle', 'erbottlewat'));
