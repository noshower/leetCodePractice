var fs = require("fs");
var nums =[];
var boundary = 10000000;
for(var i=0;i<boundary;i++){
    var num = Math.round(Math.random()*boundary);
    num = num%2===0?num:-num;
    nums.push(num);
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