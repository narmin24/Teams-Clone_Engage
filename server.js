const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const port = process.env.PORT;
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})

io.on("connection", (socket) => {
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})

// var port_number = server.listen(process.env.PORT || 3000);
// app.listen(port_number);
server.listen(5000, () => console.log("server is running on port 5000"))

// server.listen(port, () => {
// 	console.log(`Server is running on port ${port}`);
//   });