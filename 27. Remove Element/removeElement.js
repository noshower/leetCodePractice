/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var count=0;
    var l=nums.length;
    for(var i=0;i<l;i++){
        if(nums[i] !==val){
            nums[count]=nums[i];
            count++;
        }
    }
    return count;
};