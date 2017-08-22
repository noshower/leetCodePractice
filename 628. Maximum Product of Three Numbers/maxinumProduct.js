var nums = require("./Array.js");

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    var l = nums.length;
    nums.sort(function (a, b) {
        return a - b;
    });
    max1 = nums[0] * nums[1] * nums[l - 1];
    max2 = nums[l - 1] * nums[l - 2] * nums[l - 3];
    return Math.max(max1, max2);
}

// var maximumProduct = function (nums) {
//     var min1=min2=Number.MAX_SAFE_INTEGER, max1=max2=max3=Number.MIN_SAFE_INTEGER;
//     var l = nums.length;
//     var n = '';
//     for (var i = 0; i < l; i++) {
//         n = nums[i];
//         if (n <= min1) {
//             min2 = min1;
//             min1 = n;
//         } else if (n <= min2) {     
//             min2 = n;
//         }
//         if (n >= max1) {          
//             max3 = max2;
//             max2 = max1;
//             max1 = n;
//         } else if (n >= max2) {     
//             max3 = max2;
//             max2 = n;
//         } else if (n >= max3) { 
//             max3 = n;
//         }
//     }
//     return Math.max(min1 * min2 * max1, max1 * max2 * max3);
// }
 var start = new Date().getTime();
    console.log("result:"+maximumProduct(nums));
    var end = new Date().getTime();
    console.log("time:"+(end-start));
