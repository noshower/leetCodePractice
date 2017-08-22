   var nums = require('./Array.js'); // 长度为10000000
    var start = new Date().getTime();
    var newArray = [];
    for(var i=0;i<10000000;i++){
        //newArray[i]=1
        nums[i]=1;
    }
    var end = new Date().getTime();
    console.log('time: '+(end-start));