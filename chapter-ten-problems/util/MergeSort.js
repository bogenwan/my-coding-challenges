var array = [8, 9, 4, 5, 6, 2, 7, 1, 8];

const MergSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid, arr.length);

  function helper (left, right) {
    let resultArr = [];
    while (left.length && right.length) {
      right[0] < left[0] ? resultArr.push(right.shift()) : resultArr.push(left.shift());
    }
    return resultArr.concat(left, right);
  };
  return helper(MergSort(leftArr), MergSort(rightArr));
};

// console.log(MergSort(array));

module.exports = MergSort;