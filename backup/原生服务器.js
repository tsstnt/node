//引入node内置模块
let http = require('http')
let querystring = require('querystring')
let server = http.creatServer(function(request,response){
    let params = request.url.split(?)[1]
    let obj = querystring.parse(params)
    console.log(obj)
})