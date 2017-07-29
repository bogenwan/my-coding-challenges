var staircase = function (num) {
  var staircase = '';
  var i = 1;
  while (num -1 >= 1) {
    staircase = staircase + ' '.repeat(num -1) + '#'.repeat(i) + '\n';
    num--;
    i++;
  }
  return staircase;
};
// console.log(staircase(7))