var nums = require('./Array.js');

/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
    var count =0;
    var l = nums.length;
    for(var i=0;i<l;i++){
        if(nums[i]!==0){
            nums[count++]=nums[i]
        }
    }
    for(;count<l;count++){
        nums[count]=0;
    }
}

/**
 * @param {number[]} nums
 * @return {void} 
 */
// var moveZeroes = function(nums) {
//     let lastZero = -1;
//     let l=nums.length;
//     for(let i=0; i<l; i++){
//         if(nums[i] === 0 ){
//             if(lastZero === -1){
//                 lastZero = i;
//             } 
//         } else {
//             if(lastZero !== -1){
//                 nums[lastZero] = nums[i];
//                 nums[i] = 0;
//                 lastZero ++;
//             }
            
//         }
//     }
// };


var start = new Date().getTime();
moveZeroes(nums)
var end = new Date().getTime();
console.log(end - start);