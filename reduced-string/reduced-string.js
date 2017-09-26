function super_reduced_string(s){
  let word = s.split('');
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      word.splice(i, 2);
      //reset i counter to beginning of string for rescan after each operation
      i = -1;
    }
  }
  if (!word.length) {
    return 'Empty String';
  } else {
    return word.join('');
  }
}
// var reducer = super_reduced_string;
// console.log(reducer('baab'))