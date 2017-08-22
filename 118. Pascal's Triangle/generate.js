/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var result = [];
    var nextRow = [];
    for (var i = 1; i <= numRows; i++) {
        nextRow=[];
        nextRow[0] = 1;
        nextRow[i - 1] = 1;
        for (var j = 2; j <= i - 1; j++) {
            nextRow[j - 1] = result[i-2][j - 2] + result[i-2][j - 1];
        }
        result[i - 1] = nextRow;
    }
    return result;
};




console.log(generate(5));