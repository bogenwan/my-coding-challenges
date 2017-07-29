var diagonalDiff = function (num, arr) {
  var sumA = 0;
  var sumB = 0;
  for (var i = 0; i < num; i++) {
    // backslash index increase steadly
    sumA += arr[i][i];
    // forward slash index decrease from max length by the increaseing i index
    sumB += arr[i][num - 1 - i];
  }
  return Math.abs(sumA - sumB);
};

console.log(diagonalDiff(3, [[11, 2, 4], [4, 5, 6], [10, 8, -12]]))