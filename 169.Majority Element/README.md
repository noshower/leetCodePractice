# 169.Majority Element
这是leetCode第169题

我是个算法菜鸟，我在一步步成长。

# 题目
>Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

>You may assume that the array is non-empty and the majority element always exist in the array.

意思是说：给你一个大小为n的数组，找到majorityElement,该元素在数组中的出现次数超过n/2次（因此n为奇数）。
你可以假设数组不是空数组，和majorityElement元素总是存在。
也就是说，测试用例的数组中总是存在我们要找到的元素。

# 我的思路
既然数组中一定存在majorityElement元素，那么如果我们给数组进行排序，那么数组的中间的一个元素就是majorityElement；

因为我的**代码**如下：
   
    //题目中提示，数组不为空，目标一定存在，所以代码可以这么写。
    var majorityElement = function(nums) {
        var n = Math.floor(nums.length/2);
        nums.sort(function(a,b){
            return a-b;
        });
        return nums[n];
    };

虽然方法写出来了，但是我用了数组的sort方法，因此我的算法的时间复杂度为**O( n*log2(n) )**。

还有一种更快的算法，时间复杂度为**O(n)**;

### 下面这种算法，是我从别人那学来的：

    var majorityElement = function(nums) {
        var major = '';
        var count = 0;
        var length = nums.length;
        for(var i=0; i<length; i++) {
            if (count === 0) {
                major = nums[i];
                count =1;
            } else if(nums[i] === major) {
                count++;
            } else {
                count--;
            }
        }
        return major;
    }  ;

该算法假设每个元素都有可能是majorityElement。当count===0时，就更新majorityElement。如果第i 个元素==major,count就加1，否则就减1。

因为majorityElement元素的次数大于n/2，所以当某个元素被假设为majorityElement时，真正的majorityElement都总能把count减为0，最后真正的majorityElement就一定会上位。

**举个例子**：
  
      [2,3,2,3,2]  
      //count变化=> 1,0,1,0,1
     // major变化=> 2,2,2,2,2 
    
    [2,2,2,2,3,3,4]
    //count变化=>1,2,3,4,3,2,1
    //major变化=>2,2,2,2,2,2,2

# 对比两个算法的速度

执行下面的代码，来生成一个模块Array.js，该模块导出一个长度为200001的数组，数组中一定存在majorityElement。

    node product.js

**product.js的代码如下：**

    var fs = require("fs");
    var nums =[];
    var boundary = 100000;
    for(var i=0;i<boundary;i++){
        nums.push(i);
    }
    //确认一个随机的majorityElement
    var random = Math.floor(Math.random()*boundary);
    //然后把majorityElement，随机插入数组中，boundary+1次
    //这样majorityElement出现次数肯定超过n/2
    for(var i=0;i<=boundary;i++){
          nums.splice(Math.floor(Math.random()*boundary),0,random);
    }
    //转成字符串，注意字符串“module.exports=array"
    //这样就会生成一个模块，供其他文件加载。
    var str = "var array=["+nums+"];module.exports=array;";
    //写入Array.js文件，生成了js代码
    fs.writeFile('Array.js', str,  function(err) {
       if (err) {
           return console.error(err);
       }
       console.log("数据写入成功！");
     });

# 数组有了，我们开始测试算法的速度。

**首先测试我写的算法：**

     //导入数组
     var nums = require('./Array.js');
     var start = new Date().getTime();
     console.log("majorityElement : "+majorityElement(nums));
     var end = new Date().getTime();
     console.log("time: "+(end-start));

**测试结果：**

    majorityElement : 13424
    time: 57

**测试别人的算法：**

      //导入数组
      var nums = require('./Array.js');
      var start = new Date().getTime();
      console.log("majorityElement : "+majorityElement(nums));
      var end = new Date().getTime();
      console.log("time: "+(end-start));

**测试结果：**

      majorityElement : 13424
      time: 18

对比一下，57毫秒明显比18毫秒时间长，看来第二种算法的速度明显比我快。

虽然我的算法速度慢，但是我从别人那里学到了新的方法，总体来讲还是挺满足的，因为有了新收获。