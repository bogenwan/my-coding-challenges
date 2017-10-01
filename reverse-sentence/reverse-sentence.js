var sentence = 'johnny eating an apple';

const reverseSentence = function (str) {
  strArr = sentence.split(' ');
   return strArr.reverse().join(' ');
};

console.log(reverseSentence(sentence));