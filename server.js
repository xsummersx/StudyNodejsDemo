const express = require('express')
const path = require('path')
const app = express()
var pcong = require('./StudyDome1/pc/pcong2.js')
var url = 'https://www.zcool.com.cn/';
app.use(express.static(path.join(__dirname, 'StudyDome1')))
app.listen(8080, () => {
  console.log('App listening at port 8080')
})
pcong.pcong(url);