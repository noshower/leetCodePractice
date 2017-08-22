# 561.Array Partition I
这是leetCode第561题,难度Easy

我是个算法菜鸟，我在一步步成长。

# 题目
>Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

意思是：给出一个2n个整数的数组，你的任务是将这些整数分组为n对整数，如(a1,b1),(a2,b2),...(an,bn)从而在i为1到n的时候，使（ai,bi)最小值的总和尽可能得大

**Example 1:**

    Input: [1,4,3,2]
    Output: 4
    Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

**Note:**
- n is a positive integer, which is in the range of [1, 10000].
- All the integers in the array will be in the range of [-10000, 10000].

#思路：
要把n组整数的最小值的和，尽可能大。就意味着，要尽可能的把大一些的值分在一组，小一点的值分在一组，这样得到n个最小值的时候，大一点的数字就多，小一点的数字就小，结果就尽可能大。
因此，我们需要对数组进行排序，从小到大排序。从数组索引位置0开始，俩俩为一组。那么每组最小值的索引就是0，2，4，...

代码如下：

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