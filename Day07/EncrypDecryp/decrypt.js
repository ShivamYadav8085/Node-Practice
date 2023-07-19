const {createReadStream,createWriteStream} = require('fs')
const {scryptSync,createDecipheriv} = require('crypto')

const readStream = createReadStream('./data/encrypt.txt')
const writeStream = createWriteStream('./data/decrypt.txt')

const password = "12345"
const algorithm = 'aes-192-cbc';
const key = scryptSync(password,'salt',24);

const iv = Buffer.alloc(16,0);

const deCipher =createDecipheriv(algorithm,key,iv);

readStream.pipe(deCipher).pipe(writeStream).on('finish',()=>{
    console.log('done');
})