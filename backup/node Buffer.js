let buffer = Buffer.alloc(10)
console.log(buffer)//经过初始化，每一项都用00填充<Buffer 00 00 00 00 00 00 00 00 00 00>

let buf = Buffer.allocUnsafe(10)
console.log(buf)//随机分配内存 有闲置的就会抓过来使用，不安全<Buffer 70 58 01 5e ea 01 00 00 90 cf>

let buf1 = Buffer.from([12,122,14,1,2,3])
console.log(buf1)//数组传入会以16进制存储 <Buffer 0c 7a 0e 01 02 03>
let buf2 = Buffer.from("hello world","utf-8")
console.log(buf2)//<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
let buf3 = Buffer.from(buf2)
console.log(buf2 === buf3)//false
console.log(buf2[0] === buf3[0])//true
let buf4 = {...buf3}
console.log(buf4)
let buf5 = [...buf3]
console.log(buf5)
