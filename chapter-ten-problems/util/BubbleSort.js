var array = [8, 9, 4, 5, 6, 2, 3, 7, 1, 8];

const BubbleSort = function (arr) {
  let copied = arr.slice();
  do {
    var beenSort = false;
    for (let i = 0; i < copied.length; i++) {
      if (copied[i + 1] < copied[i]) {
        let temp = copied[i + 1];
        copied[i + 1] = copied[i];
        copied[i] = temp;
        beenSort = true;
      }
    }
  } while (beenSort);
  return copied;
};

// console.log(BubbleSort(array));

module.exports = BubbleSort;