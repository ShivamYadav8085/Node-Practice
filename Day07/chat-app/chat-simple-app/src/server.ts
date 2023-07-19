import { app } from "./app";

import { createServer, Server as httpServer } from "http";

import { Server } from "socket.io";

const port: string | undefined = process.env.PORT;

app.set("port", port);

const server: httpServer = createServer(app);

const io = new Server(server);
const users: any = []
io.on("connection", (socket) => {

  socket.on('new-user', name => {
    const user = {
      id: socket.id,
      name: name
    }
    console.log(socket.id);
    users.push(user)
    io.emit('user-list', users)
    socket.broadcast.emit('user-connected', name)
  })
  socket.on('send-chat-message', (data) => {
    console.log(data);

    socket.to(data.to.id).emit('chat-message', data)
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
});

server.listen(port);

export { io };
