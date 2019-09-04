//Coding Problems

//1.Remove Duplicates from Sorted Array
//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

function removeDuplicates(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)))
};

//2.Remove Element
//Given an array nums and a value val, remove all instances of that value in-place and return the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//The order of elements can be changed. It doesn't matter what you leave beyond the new length.

var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
       if (nums[i] == val) {
        nums.splice(i, 1);
        i--;
       }
    }
    return nums.length
};

//3.Reverse String
//Write a function that reverses a string. The input string is given as an array of characters char[].
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function(s) {
    return s.reverse()
};

//4.Reverse Integer
//Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function(x) {
    let reversed = x.toString().split('').reverse().join('')
    return Math.sign(x) * parseInt(reversed)
};
