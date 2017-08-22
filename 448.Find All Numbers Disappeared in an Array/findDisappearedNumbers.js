var nums = require('./Array.js')

var findDisappearedNumbers = function(nums) {
  var result = []
  var n = nums.length
  var r = []
  for(var i=0;i<n;i++){
    result[nums[i]]=nums[i]
  }
  for(i=1;i<=n;i++){
      if(result[i]===undefined){
          r.push(i)
      }
  }
  return r
}

//第二种算法

/* var findDisappearedNumbers = function (nums) {
  var n = nums.length
  var res = []
  for (var i = 0; i < n; i++) {
    nums[(nums[i] - 1) % n] += n
  }
  for (var i = 0; i < n; i++) {
    if (nums[i] <= n) {
      res.push(i + 1)
    }
  }
  return res
}
*/

var start = new Date().getTime();
console.log('length:' + findDisappearedNumbers(nums).length)
var end = new Date().getTime();
console.log('time: ' + (end - start));
