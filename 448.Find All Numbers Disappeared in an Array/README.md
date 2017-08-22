# 448.Find All Numbers Disappeared in an Array
这是leetCode第448题

我是个算法菜鸟，我在一步步成长。

## 题目

>Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

大致意思是：
给一个由1到n整数组成的数组（n为数组长度），某些数字会出现2（可以是2次以上）次，某些数字会出现1次。（如果每个数字都只出现一次的话，数组应该包含1～n的所有整数，因为有些数字出现了2次或2次以上，导致一些数字不能被包含在n长度的数组中。）
找出1～n中，所有没有出现在数组中的数字。
你能不使用额外的空间，用O(n)的时间复杂度来解决问题吗？你可以假设返回的数组不算额外空间。

**Example:**

    Input:
    [4,3,2,7,8,2,3,1]

    Output:
    [5,6]  //5和6没有包含在数组中，数组长度为8。
  
## 我的思路：

哎，我使用了额外的空间，想不出不使用额外空间的算法。

1.以数组中的每个数字作为对象result的属性和值
2.然后遍历1到n，如果result[i]不是undefined，说明之前数组就存在这个数字i。如果result是undefined，说明，这个数字i，之前不在数组中。

    var findDisappearedNumbers = function(nums) {
      var result = [];
      var n = nums.length;
      var r = [];
      for(var i=0;i<n;i++){
        result[nums[i]]=nums[i];
      }
      for(i=1;i<=n;i++){
          if(result[i]===undefined){
              r.push(i);
          }
      }
      return r;
    };  

## 没有使用额外空间的算法：
下面是别人的代码：

    var findDisappearedNumbers = function(nums) {
        var n = nums.length;
        var res = [];
            for (var i = 0; i < n; i ++){
                 nums[(nums[i]-1) % n] += n;
            }
            for (var i = 0; i <n; i ++) {
                if (nums[i] < =n){
                    res.push(i+1);
                }
            }
          return res;
    };

算法很巧妙，思路是这样的：
1. 循环数组，(nums[ i ]-1)%n  得到的是1-n之间的整数（原始的数字，因为可能会被加n），然后把这个整数对应的数组位置的值加上n。为什么要取模，因为这个位置的数字很有可能会被加n，取了模得到值就是原来的数字。
这样做的结果就是，只要数组中出现过的数字，该数字减1对应的位置，都加了至少一次n( 如果某个数字出现多次，其对应的位置上的数字就会被加多次n)。所以这个位置的数字就一定大于n。

2.再次循环数组，将当前位置i的数字与n进行比较。如果数字小于等于n，就说明i+1不存在数组中。因为如果i+1这个数字存在数组中，那么在第一步的时候，就一定会将i（通过num[i]+=n改变）位置的数字加n。

简单的讲就是，数组中存在的数字a都对将a-1位置的整数加上n。所以，数组中的整数大于n了，说明被加了n，那么其索引+1对应的整数就存在数组中。反之，数组中的整数小于等于n,就说明其索引+1对应的整数，不存在数组中。

第二种算法的思路不太直观，一眼看去很难明白它的逻辑。尽管这样，它确实没有使用额外的空间。

## 测试下两个算法的效率

执行下面的代码，来生成一个模块Array.js，该模块导出一个长度为10000000的数组，数组中的整数在1到10000000之间。

    node product.js

product.js文件的代码如下：

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

使用如下代码进行测试：

    var nums = require('./Array.js');
    var start = new Date().getTime();
    //这里就打印结果数组的长度，因为数组太长了。
    console.log('length:'+findDisappearedNumbers(nums).length);
    var end = new Date().getTime();
    console.log('time: '+(end - start));

**第一种算法的结果如下：**

    length:3679312
    time: 1461

**第二种算法的结果如下：**

    length:3679312
    time: 440

第二种算法的时间明显更快。原因可能是，我的算法使用了额外的空间来储存数据，每次储存都需要开辟新的内存，或许比较耗时。而第二种是在原来的基础上修改的，或许省力吧。

## 下面验证一下我的猜想

计算使用新定义的数组来储存10000000个1花费的时间,测试3次。

    var nums = require('./Array.js');
    var start = new Date().getTime();
    var newArray = [];
    for(var i=0;i<10000000;i++){
        newArray[i]=1;
    }
    var end = new Date().getTime();
    console.log('time: '+(end-start));

3次结果分别如下：

    time: 238
    time: 226
    time: 228

计算在原来的数组上储存10000000个1话费的时间，测试3次。

    var nums = require('./Array.js'); // 长度为10000000
    var start = new Date().getTime();
    var newArray = [];
    for(var i=0;i<10000000;i++){
        nums[i]=1;
    }
    var end = new Date().getTime();
    console.log('time: '+(end-start));

3次结果分别如下：

    time: 70
    time: 72
    time: 228
    time: 64

**结论：在原来的数组上储存数据更加高效。**

因此在算法中减少额外空间的使用，能提高算法的效率。