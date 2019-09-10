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

//5.Plus One
//Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
//You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function(digits) {
    let added = BigInt(digits.join('')) + BigInt(1)
    return added.toString().split('')
};

//6.Single Number
//Given a non-empty array of integers, every element appears twice except for one. Find that single one.

var singleNumber = function(nums) {
    let array = []
    for(let i = 0; i < nums.length; i++) {
        if(array.includes(nums[i])) {
            array.splice(array.indexOf(nums[i]), 1)
        } else {
            array.push(nums[i])
        }
    }
    return array
};

//7.First Unique Character in a String
//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i
        }
    }
    return -1
};

//8.Delete Node in Linked List
//Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};
