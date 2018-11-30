var http = require('https');
var ulr = 'https://www.runoob.com/w3cnote/webpack-tutorial.html';
http.get(ulr,function(res){
 var html = '';
 res.on('data',function(data){
   html += data;
 })
 res.on('end',function(){
     console.log(html);
 })
}).on('error',function(){
    console.log("链接失败")
})