var student = require('./student.js');
var teacher = require("./teacher.js");

function add(teacherName,studentNames){
    teacher.add(teacherName);
    studentNames.forEach(function(params,indx) {
        student.add(params)
    })
}

exports.add = add;