var array = [8, 9, 4, 5, 6, 2, 7, 1, 8];

const MergSort = function (arr) {
  let copied = arr.slice();
  if (copied.length < 2) {
    return copied;
  }
  let mid = Math.floor(copied.length / 2);
  let leftArr = copied.slice(0, mid);
  let rightArr = copied.slice(mid, copied.length);

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