var searchInsert = function(nums, target) {
     var low = 0, high = nums.length - 1, mid;
     while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] > target) {
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return low;
};