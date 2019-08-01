/**
 * Created by  on 2018/3/3.
 */
/*
* 1.使用http模块发起请求,获取到响应的数据
* 2.分析html代码,提取所有的图片地址
* 3.根据图片地址再次发起请求,获取图片文件保存到硬盘中
* */

var http = require('http');
var fs = require('fs');
http.get('http://www.itsource.cn/',function (res) {
    var html = '';
    res.on('data',function (data) {
        html += data;
    });
    res.on('end',function () {
      var reg = /src="(.*?\.jpg)"/img;
      var data_src = html.match(reg);
      fs.writeFile('../文档/data_src.txt',data_src,function (err) {
          if(err){
              console.log(err)
          }else {
              console.log('文件写入成功!')
          }
      })
    })
})