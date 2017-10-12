var array = [8, 9, 4, 5, 6, 2, 3, 7, 1, 8];

const BubbleSort = function (arr) {
  do {
    var beenSort = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        beenSort = true;
      }
    }
  } while (beenSort);
  return arr;
};

// console.log(BubbleSort(array));

module.exports = BubbleSort;