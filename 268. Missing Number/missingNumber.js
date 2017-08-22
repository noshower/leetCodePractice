var missingNumber = function(nums){
    var l = nums.length;
    var sum = (l+1)*l/2;
    for(var i=0;i<l;i++){
        sum-=nums[i];
    }
    return sum;
}