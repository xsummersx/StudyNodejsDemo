
var http = require('https');
var cheerio = require('cheerio');
var url = 'https://www.imooc.com/learn/348';
http.get(url,function(res){
    var html = '';
    res.on('data',function(data){
        html += data;
    })
    res.on('end',function(){
        //console.log(html)
        // book = [{
        //     title:'',
        //     content:'',
        //     video:[{
        //         id:'',
        //         cont:''
        //     }]
        // }]
        var books = [];
        
        var $ = cheerio.load(html);
        var book = $('.chapter');
        book.each(function(ites){
            var title = $(this).find('h3').text().replace(/^[\s\n\t]+/g, "").replace(/[\s\n\t]+/g, "");
            var content = $(this).find('.chapter-description').text().replace(/^[\s\n\t]+/g, "").replace(/[\s\n\t]+/g, "");
            var thisbook = {
                title:title,
                content:content,
                video:[]
            }
            $(this).find(".video").children('li').each(function(items){
                var id = $(this).find('.J-media-item').attr('href').split('video/')[1];
                var cont = $(this).find('.J-media-item').text().replace(/^[\s\n\t]+/g, "").replace(/[\s\n\t]+/g, "");
                thisbook.video.push({
                    id:id,
                    cont:cont
                })
            })
            books.push(thisbook);
        })
        books = JSON.stringify(books);
    })
}).on('error',function(){
    console.log("失败")
})