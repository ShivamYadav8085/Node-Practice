const {createReadStream,createWriteStream} = require('fs')
const {scryptSync,createCipheriv} = require('crypto')

const readStream = createReadStream('./data/sample.txt')
const writeStream = createWriteStream('./data/encrypt.txt')

const password = "12345"
const algorithm = 'aes-192-cbc';
const key = scryptSync(password,'salt',24);

const iv = Buffer.alloc(16,0);

const cipher = createCipheriv(algorithm,key,iv);

readStream.pipe(cipher).pipe(writeStream)
.on('finish',()=>{
    console.log("done");
})
;