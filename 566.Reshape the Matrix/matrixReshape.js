
var matrixReshape = function (nums, r, c) {
    var r1 = nums.length;
    var c1 = nums[0].length;
    if (r * c !== r1 * c1 || r1 === 0) {
        return nums;
    }
    var array = Array.prototype.concat.apply([], nums);
    var result = [];
    for (var i = 0; i < r; i++) {
        result.push(array.splice(0, c));
    }
    return result;
};

//第二种算法

/*var matrixReshape = function (nums, r, c) {
    if (!nums || nums.length === 0) { return nums; }
    let _r = nums.length, _c = nums[0].length, tmp = [], res = [];
    if (_r * _c !== r * c) { return nums; }
    for (let i = 0; i < _r; i++) {
        for (let j = 0; j < _c; j++) {
            if (tmp.length === c) {
                res.push(tmp);
                tmp = [];
            }
            tmp.push(nums[i][j]);
        }
    }
    res.push(tmp);
    return res;
};*/


var start = new Date().getTime();
var nums = [
    [1, 2, 3, 4, 5, 6, 7],
    [2, 2, 3, 4, 5, 6, 7],
    [3, 2, 3, 4, 5, 6, 7],
    [4, 2, 3, 4, 5, 6, 7],
    [5, 2, 3, 4, 5, 6, 7],
    [6, 2, 3, 4, 5, 6, 7],
    [7, 2, 3, 4, 5, 6, 7],
];
for (var i = 0; i < 10000000; i++) {
    matrixReshape(nums, 1, 49);
}
var end = new Date().getTime();
console.log(end - start);

