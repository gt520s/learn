/**
 * Created by  on 2018/3/3.
 */
var fs = require('fs');
fs.readFile('../html/index.html',function (err,data) {
    if(err){
        console.log(err)
    }else {
        console.log(data.toString())
    };
});

var str = '今天是周六啊';
fs.writeFile('../html/1.txt',str,function (err) {
    if(err){
        throw err;
    }else {
        console.log('写入成功!')
    }

})