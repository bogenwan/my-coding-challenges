const isMatch = function (text, pattern) {
  //iterate through both string with counters
  let tCounter = 0, pCounter = 0, saved;
  while (tCounter <= text.length && pCounter <= pattern.length) {
    if (text[tCounter] === pattern[pCounter] && pattern[pCounter + 1] !== '*') {
      console.log('here1', text[tCounter])
      console.log('here2', pattern[pCounter])
      tCounter++;
      pCounter++;
    } else
    if (text[tCounter] === saved && pattern[pCounter] !== undefined) {
      console.log('2')
      tCounter++;
    } else if (text[tCounter] !== saved && pattern[pCounter] !== undefined) {
      console.log('3')
      pCounter = pCounter + 2;
    }
    if (pattern[pCounter] === '.' && pattern[pCounter + 1] !== '*') {
      console.log('4')
      tCounter++;
      pCounter++;
    } else if (pattern[pCounter] === '.' && pattern[pCounter + 1] === '*') {
      console.log('5')
      saved = text[tCounter];
      tCounter++;
    }
    if (pattern[pCounter + 1] === '*') {
      if (pattern[pCounter] === text[tCounter]) {
      console.log('6')
        tCounter++;
      } else {
        console.log('7')
        pCounter = pCounter + 2;
      }
}
    if (text[tCounter] !== pattern[pCounter]) {
      console.log('hitting end false')
      return false;
    }
  }
  return true;
};
console.log('1st test', isMatch('abaa', 'a.*a*'))
// console.log('2st test', isMatch('acd', 'ab*c.'))
// console.log('3st test', isMatch('aa', 'a'))