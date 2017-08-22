/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var num = 1;
    var l =nums.length;
    if (l < 1) {
        return 0;
    }
    for (var i = 1; i < l; i++) {
        if (nums[num - 1] !== nums[i]) {
            nums[num++] = nums[i];
        }
    }
    return num;
};
console.log(removeDuplicates([1, 3, 3, 3, 4, 5, 5, 6, 6, 9]));