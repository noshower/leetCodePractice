/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var l = digits.length-1;
    for(var i=l;i>=0;i--){
        if(digits[i] !==9){
            digits[i]++;
            break;
        }else{
            digits[i]=0;
        }
    }
    if(digits[0]===0){
        digits.unshift(1);
    }
    return digits;
};
console.log(plusOne([0]));