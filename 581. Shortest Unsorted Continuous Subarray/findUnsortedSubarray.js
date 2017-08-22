/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    var l = nums.length;
    var left = -1;
    var right = -1;

    for (var i = 0; i < l; i++) {
        if (left > -1) {
            break;
        }
        for (var j = i + 1; j < l; j++) {
            if (nums[i] > nums[j]) {
                left = i;
                break;
            }
        }
    }

    for (var i = l - 1; i > -1; i--) {
        if (right > -1) {
            break;
        }
        for (var j = i - 1; j > -1; j--) {
            if (nums[i] < nums[j]) {
                right = i;
                break;
            }
        }
    }
    console.log(left, right);
    return left < 0 ? 0 : right - left + 1;
};

//更好的算法
var findUnsortedSubarray = function (nums) {
    var n = nums.length, beg = -1, end = -2, min = A[n - 1], max = A[0];
    for (var i = 1; i < n; i++) {
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[n - 1 - i]);
        if (nums[i] < max) end = i;
        if (nums[n - 1 - i] > min) beg = n - 1 - i;
    }
    return end - beg + 1;
}

findUnsortedSubarray([1, 2, 3, 3, 3]);