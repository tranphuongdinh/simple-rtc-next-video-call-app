import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    io.set("origins", "*:*");
    io.on("connection", (socket) => {
      socket.emit("me", socket.id);

      socket.on("disconnect", () => {
        socket.broadcast.emit("callended");
      });

      socket.on("calluser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("calluser", { signal: signalData, from, name });
      });

      socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
      });
    });

    res.socket.server.io = io;
  }
  res.end();
};

export default SocketHandler;
