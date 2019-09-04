//Coding Problems

//Remove Duplicates from Sorted Array

//1.Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

function removeDuplicates(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)))
};
