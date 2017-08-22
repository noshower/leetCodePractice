var fs = require("fs");
var nums =[];
var boundary = 100000;
for(var i=0;i<boundary;i++){
    nums.push(i);
}
//确认一个随机的majorityElement
var random = Math.floor(Math.random()*boundary);
//然后把majorityElement，随机插入数组中，boundary+1次
//这样majorityElement出现次数肯定超过n/2
for(var i=0;i<=boundary;i++){
      nums.splice(Math.floor(Math.random()*boundary),0,random);
}
//转成字符串，注意字符串“module.exports=array"
//这样就会生成一个模块，供其他文件加载。
var str = "var array=["+nums+"];module.exports=array;";
//写入Array.js文件，生成了js代码
fs.writeFile('Array.js', str,  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
 });