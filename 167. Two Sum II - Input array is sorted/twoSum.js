var twoSum = function (numbers, target) {
    var diffArray = {};
    var l = numbers.length;
    var d = 0;
    var f = {};
    for (var i = 0; i < l; i++) {
        d = target - numbers[i];
        if (diffArray[d] === undefined) {
            diffArray[d] = i;
        }
    }
    for (var i = 0; i < l; i++) {
        f = diffArray[numbers[i]];
        if (f !== undefined && f !== i) {
            if (f > i) {
                return [i + 1, f + 1];
            } else {
                return [f + 1, i + 1];
            }
        }
    }
    return [-1, -1];
}

var twoSum = function (numbers, target) {
    var low = 0, high = numbers.length - 1;
    var sum = 0;
    while (low < high) {
        sum = numbers[low] + numbers[high];
        if (sum > target) {
            high--;
        } else if (sum < target) {
            low++;
        } else {
            return [low + 1, high + 1];
        }
    }
    return [-1, -1];
}

var nums = [76, 9, 45, 80, 54, 10, 25, 21, 74, 67, 28, 45, 6, 65, 48, 55, 11, 78, 26, 15,
    29, 99, 49, 38, 38, 27, 57, 97, 7, 43, 46, 84, 14, 42, 73, 51, 83, 14, 99, 40, 20, 44, 87, 97, 0, 23, 93, 68, 73, 47, 62, 31, 66, 34, 21, 19, 1, 62, 50, 59, 57, 8, 45, 72, 50, 27, 11, 3, 79, 22, 7,
    60, 66, 46, 81, 59, 94, 47, 66, 95, 39, 16, 64, 86, 98, 54, 12, 43, 34, 82, 43, 81, 24, 46, 19, 96, 65, 50, 85, 42]
nums.sort(function (a, b) {
    return a - b;
});

//console.log(twoSum(nums, 76))
var start = new Date().getTime();
for (var i = 0; i < 10000000; i++) {
    twoSum(nums, 76)
}

var end = new Date().getTime();
console.log(end - start);