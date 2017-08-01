const permutation = function (str) {
  var strArr = str.split('');
  var permuList = [ ];

  var swap = function (a, b) {
    var temp = strArr[a];
    strArr[a] = strArr[b];
    strArr[b] = temp;
  };

  function helperGenerater (num) {
    if (num === 1) {
      return strArr;
    }
    for (var i = 0; i < num; i++) {
      console.log(num)
      helperGenerater(num -1);
      if (num % 2 === 0) {
        swap(i, num -1);
        console.log(strArr)
        permuList.push(strArr);
      } else {
        swap(0, num -1);
        permuList.push(strArr);
      }
    }
  }

  helperGenerater(str.length);

  return permuList;
};
console.log(permutation('abc'));

// var regex = /([a-z])\1+/

// console.log(regex.test('johny'));