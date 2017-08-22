/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} 
 */
var merge = function(nums1, m, nums2, n) {
   var i=m-1,j=n-1,k=m+n-1;
    while(j>-1){
        nums1[k--]=(nums1[i]>nums2[j])?nums1[i--]:nums2[j--];
    }
};

merge([0],0,[1],1)