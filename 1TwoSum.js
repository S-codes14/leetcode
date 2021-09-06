/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //e.g num = [2, 7, 11, 15], target = 9
 // output [0,1] because num[0] + num[1] = target

// Brute Force 0(n^2) - quadratic runtime
// function twoSum(nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length;  j++) {
//             if (nums[j] == target - nums[i]) {
                
//                 return [i, j]
//             };
//         };
//     };
    
// };


//two pass Hash map solution 0(n) - linear run time
// function twoSum(nums, target) {
//     const hashMap = {}
//     for (let i = 0; i < nums.length; i++){
//         hashMap[nums[i]] = i;
//     };
//     for (let i = 0; i < nums.length; i++){
//         let complement= target - nums[i]
//         if (hashMap[complement] && hashMap[complement] != i){
//             return [i, hashMap[complement]]
//         }
//     };
// };

// One pass Solution
function twoSum(nums, target) {
    const hashMap = {}
   
    for (let i = 0; i < nums.length; i++){
        let complement= target - nums[i]
        if (complement in hashMap){
            return [i, hashMap[complement]]
        }
        hashMap[nums[i]] = i;
    };
};
num = [2, 7, 11, 15]
console.log(twoSum(num, 9))