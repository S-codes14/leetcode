/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //e.g num = [2, 7, 11, 15], target = 9
 // output [0,1] because num[0] + num[1] = target

// Brute Force
function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length;  j++) {
            if (nums[j] == target - nums[i]) {
                
                return [i, j]
            };
        };
    };
    
};
num = [2, 7, 11, 15]
console.log(twoSum(num, 9))