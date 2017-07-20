/*
implement an algorithm to determin if a string has all unique characters, what if you cannot use additional data structures?
*/

const isUnique = (string) => {
  let state = true
  let storage = {};
    for (var i = 0; i < string.length; i++) {
      console.log('this is string[1]', string[i])
      console.log('this is storage has property', storage.hasOwnProperty(string[i]))
      if (storage.hasOwnProperty(string[i])) {
        return state = false
      } else {
        storage[string[i]] = 0;
        console.log('this is storage', storage)
      }
    }
  return state;
}

console.log(isUnique('world'))