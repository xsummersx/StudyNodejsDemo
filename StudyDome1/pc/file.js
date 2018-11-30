function fileaddjosn(json) {
var fs = require('fs');
fs.writeFile('./StudyDome1/pc/pcong.json',json,function(err){
    if (err) {
        //throw err;
    }
    console.log('write');
  })
}
exports.fileaddjosn = fileaddjosn;