var containsDuplicate = function (nums) {
    var obj = {};
    var l = nums.length;
    for (var i = 0; i < l; i++) {
        if (obj[nums[i]] !== undefined) {
            return true;
        }
        obj[nums[i]] = i;
    }
    return false;
};

var containsDuplicate = function(nums) {
    return new Set(nums).size < nums.length;
};