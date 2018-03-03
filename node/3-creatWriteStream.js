/**
 * Created by  on 2018/3/3.
 */
var fs = require('fs');
var stream_write = fs.createWriteStream('../文档/写入文件.txt');
stream_write.write('这是一个测试文件!');
stream_write.end()