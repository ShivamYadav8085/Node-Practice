import * as http from 'node:http'
import * as fs from 'node:fs/promises'
import path from 'node:path'


http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    

    fs.readFile("/Users/shivamy2/Desktop/Practice/NodeJs/Day01/Data/users.json").then(content=>{
        res.write(content)
        res.end()
    })
    .catch(e=>{
        res.write(e.message)
        res.end()
    })
}).listen(3000,()=>{
    console.log("Listening at : 3000");
})

