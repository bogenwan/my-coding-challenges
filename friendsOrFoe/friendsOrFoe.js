/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has 4 letters in it, you can be sure that it has to be a friend of yours!

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
*/

// refactored after knowing code war understand ES6 and filter function
function friend(friends){
  return friends.filter((eachFriend) => {
    return eachFriend.length === 4;
  });
}

// function friend(friends){
//   // create a empty list
//   let listOfFriends = [];
//   // travers through the list of friends
//   for (var i = 0; i < friends.length; i++) {
//     // check if each friend's name have the length of 4 letters
//     if (friends[i].length === 4) {
//       // if it is then push the friend in to the list
//       listOfFriends.push(friends[i]);
//     }
//   }
//   // then return the filtered friends list back to the user
//   return listOfFriends;
// }

