const permutation = function (str) {
  var arr = str.split('');
  var permuList = [ ];
  // helper for swap element in array
  var swap = function (a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  function generater (num) {
    if (num === 1) {
      // once recurisve iteration calls down to 1, we can only push the permued string to the array here
      permuList.push(arr.join(''))
      return;
    }
    for (var i = 0; i < num; i++) {
      generater(num -1);
      if (num % 2 === 0) {
        swap(0, num -1);
      } else {
        swap(i, num -1);
      }
    }
  }

  generater(str.length);

  return permuList;
};
console.log(permutation('abcd'));

// var regex = /([a-z])\1+/

// console.log(regex.test('johny'));