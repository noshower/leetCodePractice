var nums = require('./Array.js');
var majorityElement = function(nums) {
    var n = Math.floor(nums.length/2);
    nums.sort(function(a,b){
        return a-b;
    });
    if(n===0){
        return nums[n];
    }
    if(nums[n-1]===nums[n] || nums[n]===nums[n+1]){
            return nums[n];
    }
};

// 第二种算法
/* var majorityElement = function(nums) {
    var major = '';
    var count = 0;
    var length = nums.length;
    for(var i=0; i<length; i++) {
        if (count === 0) {
            major = nums[i];
            count =1;
        } else if(nums[i] === major) {
            count++;
        } else {
            count--;
        }
    }
    return major;
};
*/

var start = new Date().getTime();
console.log("majorityElement : "+majorityElement(nums));
var end = new Date().getTime();
console.log("time: "+(end-start));