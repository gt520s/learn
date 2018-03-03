/**
 * Created by  on 2018/3/3.
 */

var fs = require('fs');
var stream1 =  fs.createReadStream('../1.mp3')//创建可读流
stream1.on('data',function (txt) {
    console.log(txt.toString());
    console.log(11);
}).on('end',function () {
    console.log('文件读取完毕!')
}).on('error',function (err) {
    console.log(err)
})


