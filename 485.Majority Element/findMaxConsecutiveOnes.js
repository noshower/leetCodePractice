var nums = require('./Array.js');

var findMaxConsecutiveOnes = function (nums) {
    var str = nums.join("").split("0").map(function (value) {
        return value.length
    })
    return Math.max.apply(null, str)
}

//第二种算法 

/* var findMaxConsecutiveOnes = function (nums) {
  var l = nums.length
  var max = 0
  var len = 0
  for (var i = 0; i < l; i++) {
    if (nums[i] == 1) {
      len++
      if (len > max) {
        max = len
      }
    } else {
      len = 0
    }
  }
  return max
}
*/

var nums = require('./Array.js')
var start = new Date().getTime()
console.log('result: ' + findMaxConsecutiveOnes(nums))
var end = new Date().getTime()
console.log('time: ' + (end - start))
