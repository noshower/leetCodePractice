/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
   var map = {};
   var l = nums.length;
   var value;
   for(var i=0;i<l;i++){
     value = nums[i];
     if(map[value]!== undefined){
         if(i - map[value] <=k){
             return true;
         }
     }
    map[value]=i;
   }
   return false;
};