var maxProfit = function(prices){
    var l = prices.length;
    var max=0;
    var diff =0;
    for(var i=0;i<l;i++){
        for(var j=i+1;j<l;j++){
            diff = prices[j]-prices[i];
            if(max < diff){
                max = diff;
            }
        }
    }
    return max;
}

var maxProfit = function(prices){
    var max = 0;
    var soFarMin  = prices[0];
    var l = prices.length;
    for(var i=1;i<l;i++){
        if(prices[i]<soFarMin){
            soFarMin = prices[i];
        }else{
            max = Math.max(max,prices[i]-soFarMin);
        }
    }
    return max;
}