# 1.Two Sum 
这是leetCode第1题,难度Easy

我是个算法菜鸟，我在一步步成长。

# 题目

> Given an array of integers, return indices of the two numbers such that they add up to a specific target.
   You may assume that each input would have exactly one solution, and you may not use the same element twice.

大致意思是：
给你一个整型数组，要求你返回两个数的索引，它们的和是一个特定的目标。你可以假设每个输入都存在一种结果（返回其中一种结果就行），你不可以使用同一个元素两次。

   **Example:**

     Given nums = [2, 7, 11, 15], target = 9,

      Because nums[0] + nums[1] = 2 + 7 = 9,
      return [0, 1].

下面是我的代码：

      /**
       * @param {number[]} nums
       * @param {number} target
       * @return {number[]}
     */
    var twoSum = function(nums, target) {
        var l = nums.length;
        for(var i=0;i<l;i++){
            for(var j=i+1;j<l;j++){
                if(nums[i]+nums[j]===target){
                     result = [i,j];
                     return result;
                }
            }
        }
    };

简单测试一下：
   
     twoSum([3,2,4,5],7) // result: [0,2]
     twoSum([3,2,4,5,8,11,28,16,13,8,7,21],44) //result:[6,7]

OK测试通过了，我很兴奋，这题目真简单。

可是，我的代码执行效率很低。因为我的做法很暴力，循环遍历每个数字，然后寻找是否有一个数字和当前位置的数字的和，等于target。

这种做法的时间复杂度为：O(n^2);

# 高手们的做法：

其实我们可以一次性完成，不需要在循环中嵌套循环。

**高手们的做法**：迭代数组并将元素作为对象的属性，索引作为该属性的值。每次都检查一下，对象中是否存在target与当前元素的差值。如果存在，我们已经找到一个解决方案并立即返回。

    var twoSum = function(nums, target) {
        var map = {};
        for(var i = 0; i < nums.length; i++) {
            var check = nums[i];
            var search = target - check;
            if(map[search] === undefined) {
                map[check] = i;
            } else {
                return [map[search], i];
            }
        }
    };

# 下面，测试一下两种算法花费的时间大小：

按照下面的代码，创建一个模块Array.js，导出一个长度为10000000的整型数组：

    node  product.js

product.js文件的代码如下

    var fs = require("fs");
    var nums =[];
    var boundary = 10000000;
    for(var i=0;i<boundary;i++){
        nums.push(Math.floor(Math.random()*boundary));
    }
    //转成字符串
    var str = "var array=["+nums+"];module.exports=array;";
    //写入Array.js文件，生成了js代码
    fs.writeFile('Array.js', str,  function(err) {
       if (err) {
           return console.error(err);
       }
       console.log("数据写入成功！");
    });

使用下面的代码测试算法：
    
    var nums=require('./Array.js');
    var start = new Date().getTime();
    console.log("result : "+twoSum(nums,877656));
    var end = new Date().getTime();
    console.log("time: "+(end-start));

**第一种算法的结果：**

    result : 4,5008617
    time: 124

**第二种算法的结果：**
  
    result : 977,24257
    time: 22

因为算法不同，可能找到结果不同。
**但是**，第二种算法的时间，明显更快。

再看下另一个测试结果
  
     var nums=require('./Array.js');
    var start = new Date().getTime();
     console.log("result : "+twoSum(nums,45678));
    var end = new Date().getTime();
    console.log("time: "+(end-start));

**第一种算法的结果：**

    result : 154,5721777
    time: 3893

**第二种算法的结果：**
  
    result : 42904,74847
    time: 72

结果还是第二种算法更快。