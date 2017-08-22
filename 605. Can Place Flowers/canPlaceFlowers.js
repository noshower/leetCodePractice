var nums = require('./Array.js');
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
   var count = 0;
    var l = flowerbed.length;
    if(l===1 && flowerbed[0]===0){
        return n<=1;
    }
    if (flowerbed[0] === 0 && flowerbed[1] === 0) {
        flowerbed[0] = 1;
        count++;
    }
    for (var i = 1; i < l - 1; i++) {
        if (flowerbed[i] === 0) {
            if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                count++;
            }
        }
        if(n<=count){
            return true;
        }
    }
    if (flowerbed[l - 1] === 0 && flowerbed[l - 2] === 0) {
        flowerbed[l - 1] = 1;
        count++;
    }
    return n<=count;
};


//更直观的算法

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// var canPlaceFlowers = function(flowerbed, n) {
//     if (n === 0 ) { return true; }
//     var len = flowerbed.length;
    

//   for (var i = 0; i < len; i++ ) {
//     var current = flowerbed[i];
//     var prev = flowerbed[i - 1];
//     var next = flowerbed[i + 1];
//     if (!prev && !current && !next) {
//       flowerbed[i] = 1;
//       n--;
//     }
//     if (n === 0) {
//         return true;
//     }

//   }

  
//   return n === 0;
// };

var start = new Date().getTime();
canPlaceFlowers(nums,10000);
var end = new Date().getTime();
console.log("time : "+(end-start));