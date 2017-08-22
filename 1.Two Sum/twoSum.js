var nums=require('./Array.js');

var twoSum = function(nums, target) {
    var l = nums.length;
    var i=0;
    var result = [];
    for(i;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            if(nums[i]+nums[j]===target && i!==j){
                 return    result = [i,j];
            }
        }
    }
    return result;
};

//第二种算法
/* var twoSum = function(nums, target) {
    var map = [];
    var result = [];
    for(var i = 0; i < nums.length; i++){
        if (map[target - nums[i]] !== undefined){
            index = map[target - nums[i]];
            result[0] = index;
            result[1] = i;
            return result;
        }else{
            map[nums[i]] = i;
        }
    }
    return result;
}; */

var start = new Date().getTime();
console.log("result : "+twoSum(nums,45678));
var end = new Date().getTime();
console.log("time: "+(end-start));