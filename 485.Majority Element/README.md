# 485.Max Consecutive Ones
这是leetCode第485题

我是个算法菜鸟，我在一步步成长。

## 题目
>Given a binary array, find the maximum number of consecutive 1s in this array.

意思是说：给你一个二进制数组，找出在这个数组中，连续1的最大数。

**example:**

    Input: [1,1,0,1,1,1]
    Output: 3   //最大连续3个1
  
    Input: [1,1,0,1,1,1,1,1,1,0,1,1,1,1,1]
    Output: 6   //最大连续6个1

## 我的思路：
1.先将数组转成字符串
2.以0为分隔符，将字符串转成数组
3.返回数组中每个元素的长度的数组
4.利用Math.max.apply，找出数组中的最大数字

代码如下：

      var findMaxConsecutiveOnes = function (nums) {
      var str = nums.join("").split("0").map(function (value) {
            return value.length;
        });
        return Math.max.apply(null, str);
      }

代码很简单，至于效率怎么样，我们待会测试一下。
下面先看下别人的思路。

## 别人的代码

    var findMaxConsecutiveOnes = function (nums) {
        var l = nums.length;
        var max = 0; //最大连续数
        var len = 0; //连续1的数量
        for (var i = 0; i < l; i++) {
            if (nums[i] == 1) {
                len++
                if (len > max) {
                  max = len;
                }
          } else {
              len = 0;
          }
      }
      return max;
    }

它的思想是：循环数组，每当当前元素是1的时候，len加1，并和max比较，如果len>max，更新max。当当前元素不是1的时候，len重新设置为0，后面将要重新计算连续1的数量。

思路很简单，效率自然很高。

##测试算法效率

执行下面的代码，来生成一个模块Array.js，该模块导出一个长度为10000000的二进制数组。

    node product.js

 product.js代码如下：

    var fs = require("fs");
    var nums =[];
    var boundary = 10000000;
    for(var i=0;i<boundary;i++){
        nums.push(Math.round(Math.random()));
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

执行下面的代码进行测试：

    var nums = require('./Array.js');
    var start = new Date().getTime();
    console.log("result: "+findMaxConsecutiveOnes(nums));
    var end = new Date().getTime();
    console.log("time: "+(end - start));

**测试第一个算法的结果：**

    RangeError: Maximum call stack size exceeded

尴尬！Math.max.apply(null, str)的str参数超出了大小。说明我的算法局限性很大，str的值有限制。

我只好把测试数组的大小设置为100000，得出如下结果：

    result: 15
    time: 46

**测试第二个算法的结果（测试的数组大小为100000）：**
    
    result: 15
    time: 40

**测试第二个算法的结果（测试的数组大小为10000000）：**
    
    result: 22
    time: 79

第二种算法不受数组大小的限制。

结果很明显，我的算法渣的要命，100000的长度要47毫秒。别人的算法，10000000的长度才79毫秒。

**结论，数组的某一些操作还是比较耗时的，效率不如循环数组来的高。**