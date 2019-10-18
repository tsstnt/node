const express = require('express')
const app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extend:true}))

app.get('/ajax_get',function (request,response) {
    console.log('send get')
    console.log(request.query)
    response.send('get it')
    
})
 
app.post('/ajax_post',function (request,response) {
    console.log('send post')
    console.log(request.body)
    response.send('get ajax-post')
})

app.listen(3000,function (err) {
    if(!err){
        console.log('练习ajax请求的服务器启动成功了')
        console.log('【为了避免跨域问题，禁止使用编译打开网页！！！！！！！！！】')
        console.log('测试原生Ajax-GET请求的页面是：http://localhost:3000/ajax_get.html')
        console.log('测试原生Ajax-POST请求的页面是：http://localhost:3000/ajax_post.html')
    }else{
        console.log(err)
    }
})