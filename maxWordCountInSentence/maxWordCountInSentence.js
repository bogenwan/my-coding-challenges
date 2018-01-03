var countWords = function (S) {
  if (S === '') {
    return 0;
  }
  let objStore = {}, storeCounter = 0, maxCount = 0;

  for (let i = 0; i < S.length; i++) {
    console.log(S[i])
    if (S[i] === '.' || S[i] === '?' || S[i] === "!") {
      storeCounter++;
    } else {
      if (!objStore[storeCounter]) {
        objStore[storeCounter] = S[i];
      } else {
        objStore[storeCounter] = objStore[storeCounter] + S[i];
      }
    }
  }
  for (let key in objStore) {
    let eachArr = objStore[key].split(' ');
    // remove unwanted space " " value in the array
    eachArr.splice(eachArr.indexOf(''), 1);
    if (eachArr.length > maxCount) {
      maxCount = eachArr.length;
    }
  }
  return maxCount;
};

console.log(countWords('Forget  CVs..Save time . x x'));