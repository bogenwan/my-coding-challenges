var array = [8, 9, 4, 5, 6, 2, 3, 7, 1, 8];

const InsertionSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr.splice(i, 1);
        arr.splice(j, 0, ...temp);
      }
    }
  }
  return arr;
};

// console.log(InsertionSort(array));

module.exports = InsertionSort;