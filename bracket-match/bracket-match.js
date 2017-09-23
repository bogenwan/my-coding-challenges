const bracketMatch = function (brackets) {
  let openBkt = 0;
  let missing = 0;
  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === '(') {
      openBkt++;
    } else if (brackets[i] === ')' && openBkt !== 0) {
      openBkt--;
    } else {
      missing++;
    }
  }
  return openBkt + missing;
};

// console.log(bracketMatch('(()'));
// console.log(bracketMatch('(())'));
// console.log(bracketMatch('())('));
// console.log(bracketMatch('())())((()'));
