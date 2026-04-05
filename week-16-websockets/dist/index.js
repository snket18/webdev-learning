import { WebSocketServer } from "ws";
const ws = new WebSocketServer({ port: 8080 });
// event handeler 
ws.on("connection", function (socket) {
    console.log("user has connected");
    socket.on("message", (e) => {
        const message = e.toString().trim();
        console.log("Received:", message);
        if (message === "ping") {
            socket.send("pong");
        }
    });
});
//# sourceMappingURL=index.js.map