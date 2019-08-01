/**
 * Created by  on 2018/3/3.
 */
var http = require('http');
http.get('http://www.itsource.cn/', function (res) {
    var html = '';
    //真正拿数据的需要绑定data事件
    res.on('data', function (txt) {
        // html += txt;
        console.log(txt.length)
    });
    res.on('end',function () {
        console.log(html)
        console.log('响应完成!')
    })
});