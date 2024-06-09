/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0]
    let max = nums[0]
    let current = 0;
    for (let i = 0; i < nums.length; i++){
    current = current + nums[i] > nums[i] ? current + nums[i] : nums[i];
        max = Math.max(current, max)
    }
    return max
};