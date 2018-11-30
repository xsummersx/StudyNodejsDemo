var klass = require("./klass.js");
function add(lass){
    lass.forEach(function(params,indx) {
        klass.add(params.teacherName,params.studentName)
    })
}
exports.add = add;