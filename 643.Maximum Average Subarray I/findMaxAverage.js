/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    var l = nums.length;
    var sum = 0;
    for (var i = 0; i < k; i++) {
        sum += nums[i];
    }
    var max = sum;
    for (var i = k; i < l; i++) {
        sum = sum + nums[i] - nums[i - k];
        if (sum > max) {
            max = sum;
        }
    }
    return max / k;
};