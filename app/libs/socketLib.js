/**
 * modules dependencies.
 */
const socketio = require("socket.io");
const mongoose = require("mongoose");
const shortid = require("shortid");
const logger = require("./loggerLib.js");
const events = require("events");
const eventEmitter = require("./eventLib");

const tokenLib = require("./tokenLib.js");
const check = require("./checkLib.js");
const response = require("./responseLib");
const { mailSend } = require("./mailSendLib");

let setServer = server => {
    //let allOnlineUsers = [];
    let io = socketio.listen(server);

    eventEmitter.addListener("connection", (notification, userId) => {
        console.log(notification, userId);

        io.to(userId).emit("notification", { notification });
        mailSend(userId, notification).then(res => {
            console.log("res", res);
        });
    });

    io.on("connection", socket => {
        console.log("on connection--emitting verify user");

        socket.emit("verifyUser", "");

        // code to verify the user and make him online

        socket.on("set-user", data => {
            socket.join(data.userId); // We are using room of socket io
        }); // end of listening set-user event

        socket.on("disconnect", () => {
            // disconnect the user from socket
            console.log("user is disconnected");
            // console.log(socket.connectorName);
            console.log(socket.userId);
        }); // end of on disconnect
    });

    // io.sockets.in(userId).emit("new_notification", { msg });
};

module.exports = {
    setServer: setServer
};
