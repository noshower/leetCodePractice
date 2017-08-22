var arrayPairSum = function (nums) {
    var l = nums.length;
    var sum = 0;
    //对数组进行排序，从小到大排
    nums.sort(function (a, b) {
        if (a < b) {
            return -1;
        } else {
            return 1;
        }
    });
    for (var i = 0; i < l; i += 2) {
        //每一组的最小值，索引都是偶数
        sum += nums[i];
    }
      return sum;
 };