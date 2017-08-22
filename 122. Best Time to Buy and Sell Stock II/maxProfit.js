var maxProfit = function(prices){
    var max = 0;
    var l =prices.length;
    for(var i=1;i<l;i++){
        if(prices[i]>prices[i-1]){
            max +=prices[i]-prices[i-1];
        }
    }
    return max;
}