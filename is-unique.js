const isUnique = (string) => {
  let state = true
  let storage = {};
  for (var i = 0; i < string.length; i++) {
    if (storage.hasOwnProperty(string[i])) {
      return state = false
    } else {
      storage[string[i]] = 0;
    }
  }
  return state;
}

// console.log(isUnique('wold'));