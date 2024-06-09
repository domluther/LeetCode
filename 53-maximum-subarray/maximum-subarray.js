/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    let current = 0;
    for (let i = 0; i < nums.length; i++){
    // Update current sum by adding the ith element
    // If the current sum becomes less than the ith element,
    // reset current sum to the ith element
    current = current + nums[i] > nums[i] ? current + nums[i] : nums[i];
        max = Math.max(current, max)
    }
    return max
};