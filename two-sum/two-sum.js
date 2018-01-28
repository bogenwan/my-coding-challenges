/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]
*/

var array = [3, 5, 2, 7, 3, 9, 4];

function twoSum = (arr, target) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let currNum  = arr[i];
    let otherHalf = target - arr[i];
    if (hash[otherHalf] !== undefined) {
      return [hash[otherHalf], i];
    }else {
      hash[currNum] = i;
    }
  }
};
