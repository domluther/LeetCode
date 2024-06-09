/**
 * @param {number[]} nums
 * @return {number}
 */

// Uses a sliding window to solve it 
var maxSubArray = function(nums) {
    let max = nums[0]
    let current = 0;
    for (let i = 0; i < nums.length; i++){
    // Try adding the current with the next item, if it's not bigger then the window restarts
    current = current + nums[i] > nums[i] ? current + nums[i] : nums[i];
        max = Math.max(current, max)
    }
    return max
};
