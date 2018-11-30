function pcong(url) {
  var http = require("https");
  var cheerio = require("cheerio");
  var filejson = require("./file.js");
  var url = url;
  var jsons = [];
 
  http.get(url, function(res) {
      var jqueryHtml = "";
      res.on("data", function(data) {
        jqueryHtml += data;
      });
      res.on("end", function() {
        var $ = cheerio.load(jqueryHtml);
        var contentBox = $(".card-box");
        // json = [{
        //     id:'',
        //     imgsrc:'',
        //     info:[{
        //     title:'',
        //      cont:'', 
        //      inmation:[{
        //      see:'',tall:'',good:''
        //}],author:''
        //    }],
        // }]
        contentBox.each(function(items) {
          var imgsrc = $(this).children('.card-img').find("img").attr("src");
          //var title = $(this).find("title-text").text().replace(/^[\s\n\t]+/g, "").replace(/[\s\n\t]+/g, "");
          var jsonlt = {
            id: items,
            imgsrc: imgsrc,
            info:[]
          };
          $(this).children('.card-info').each(function(itemss){
            var title = $(this).find('.title-content').text().replace(/^[\s\n\t]+/g, "").replace(/[\s\n\t]+/g, "");
            var cont = $(this).find('.card-info-type').text().replace(/^[\s\n\t]+/g, "").replace(/[\s\n\t]+/g, "");
            var see = $(this).find('.statistics-view').text().replace(/^[\s\n\t]+/g, "").replace(/[\s\n\t]+/g, "");
            var tall = $(this).find('.statistics-comment').text().replace(/^[\s\n\t]+/g, "").replace(/[\s\n\t]+/g, "");
            var good = $(this).find('.statistics-tuijian').text().replace(/^[\s\n\t]+/g, "").replace(/[\s\n\t]+/g, "");
            jsonlt.info = {
              title:title,
              cont:cont,
              see:see,
              tall:tall,
              good:good
            }
          })
          jsons.push(jsonlt);
        });
        filejson.fileaddjosn(JSON.stringify(jsons));
      });
    }).on("error", function() {
      console.log("瓢虫已死！");
    });
}
exports.pcong = pcong;
