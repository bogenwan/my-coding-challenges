var plusMinus = function (num, arr) {
  var posCount = 0;
  var negCount = 0;
  var zeroCount = 0;
  for (var i = 0; i < num; i++) {
    if (arr[i] > 0) {
        posCount++;
    } else if (arr[i] < 0) {
        negCount++;
    } else {
        zeroCount++;
    }
  }
    var pos = posCount / num;
    var neg = negCount / num;
    var zero = zeroCount / num;
    return [pos.toFixed(6), neg.toFixed(6), zero.toFixed(6)];
};
// console.log(plusMinus(6, [-4, 3, -9, 0, 4, 1]))