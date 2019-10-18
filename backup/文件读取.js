let fs = require('fs')

fs.readFile(`${__dirname}/music.mp3`,{
    flag:'r'
},(err,data)=>{
    if(!err){
        //思考：为什么读取出来的东西，不是直接能看得懂的字符串，而是二进制的Buffer（转成16进制之后的数据）
        //编码人员读取的不一定是纯文本的数据，有可能是：音频、视频等等
        //console.log(data.toString())//Buffer实例的toString是将二进制的Buffer转成字符串
        fs.writeFile(`${__dirname}/music2.mp3`,data,(err)=>{
            if(!err){
                console.log('文件写入成功')
            }else{
                console.log(err)
            }
        })
    }else{
        console.log(err)
    }
})