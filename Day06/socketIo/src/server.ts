import { app } from "./app";

import * as http from "http"

import {Server} from "socket.io"


const port: string|undefined = process.env.PORT;

app.set("port", port);

const server:http.Server =http.createServer(app)

const io = new Server(server);

io.on("connection",(socket)=>{
    console.log(`user connected`);
    socket.on("chat message",(msg)=>{
        io.emit('chat message',msg)
        console.log('message:'+msg);
        
    })

    socket.on('disconnect',()=>{
        console.log('user disconnected');
        
    })    
})

server.listen(port);

export {io};