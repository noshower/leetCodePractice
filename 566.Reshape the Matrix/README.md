# 566.Reshape the Matrix

这是leetCode第566题,难度Easy

我是个算法菜鸟，我在一步步成长。

# 题目

>In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

> You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

>The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

>If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

意思是说：
在MATLAB,有一个非常有用的函数叫“reshape”，它能够将矩阵重塑成一个不同大小的，但是保持原始数据的新矩阵。
给你一个用二维数组表示的矩阵，和两个正整数r和c。r表示想要重塑后矩阵的行数量，c表示列的数量。
重塑的矩阵需要用原始矩阵一行行依次遍历后得到的所有数据来填充。
如果给出的参数是可行的，那么就输出新矩阵。否则就输出原始矩阵。

**Example 1:**

    Input: 
        nums =  [[1,2], [3,4]]
        r = 1, c = 4
    Output: 
        [[1,2,3,4]]

**Example 2:**

    Input: 
        nums = [[1,2],[3,4]]
    r = 2, c = 4
    Output: 
        [[1,2], [3,4]] //不符合。2*2的矩阵无法重塑成2*4的矩阵，数据不够。

**Note**
    1:给定矩阵的高度和宽度在[1,100]范围内。
    2.给定的r和c都是正的。

# 我的代码：

      var matrixReshape = function (nums, r, c) {
          var r1 = nums.length;
          var c1 = nums[0].length;
          //如果前后数量不等，或原始数组为空数组，直接返回原始数组
          if (r * c !== r1 * c1  ||  r1===0) {
              return nums;
          }
          //使用concat方法，将二维数组所有数据，塞入空数组，得到一维数组
          var array = Array.prototype.concat.apply([], nums);
          var result = [];
          for (var i = 0; i < r; i++) {
              //使用splice产生c长度的数组，同时原始数组大小会改变，因此每次都是从0开始操作数组。
              result.push(array.splice(0, c));
          }
          return result;
       };

我的思路很简单，先把原始矩阵的所有数据放入空数组中。每次分割出一个长度为c的数组，依次插入结果数组中，共分割r次。

但是我的代码却比较消耗时间，或许数组操作耗时吧。

测试一下时间：

    var start = new Date().getTime();
    //7*7的矩阵
    var nums = [
        [1, 2, 3, 4, 5, 6, 7],
        [2, 2, 3, 4, 5, 6, 7],
        [3, 2, 3, 4, 5, 6, 7],
        [4, 2, 3, 4, 5, 6, 7],
        [5, 2, 3, 4, 5, 6, 7],
        [6, 2, 3, 4, 5, 6, 7],
        [7, 2, 3, 4, 5, 6, 7],
    ];
    //执行1000万次
    for (var i = 0; i < 10000000; i++) {
        matrixReshape(nums, 1, 49);
    }
    var end = new Date().getTime();
    console.log(end - start); 

1000万次，大概花了**8194毫秒**（使用node测的）

# 下面来看下，更节约时间的算法：

    var matrixReshape = function (nums, r, c) {
    if (!nums || nums.length === 0) { return nums; }
    let  _r = nums.length, //行数
     _c = nums[0].length, //列数
     tmp = [],  //表示重塑的数组的一行
     res = []; //结果
    if (_r * _c !== r * c) { 
      return nums;
     }
     //利用两个for循环将数据，插入重组数组的行内。
    for (let i = 0; i < _r; i++) {
        for (let j = 0; j < _c; j++) {
            //一行排满了，就把它插入结果数组中，并重置为空数组
            if (tmp.length === c) {
                res.push(tmp);
                tmp = [];
            }
           //把数据插入数组内
            tmp.push(nums[i][j]);
        }
    }
      res.push(tmp);
      return res;
    };

同样测试一下时间：

大概花了5692毫秒（使用node测试的，如果在浏览器上测试，时间会更长）

第二种方式，没有创建一个包含所有数据的一维数组，而是直接将数据陆陆续续插入重塑的数组行内，这样效率更高。