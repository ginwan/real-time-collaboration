import { NextApiRequest, NextApiResponse } from "next";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { Socket as NetSocket } from "net";

type NextApiResponseSocketIO = NextApiResponse & {
    socket: NetSocket & {
        server: NetServer & {
            io?: ServerIO;
        };
    };
};

export default function handler(req: NextApiRequest, res: NextApiResponseSocketIO) {
    if (!res.socket.server.io) {
        console.log("Starting Socket.io server...");
        const httpServer: NetServer = res.socket.server as any;
        const io = new ServerIO(httpServer, {
            path: "/api/socket",
        });
        res.socket.server.io = io;

        io.on("connection", (socket: any) => {
            console.log("User connected");

            socket.on("edit-document", (data: any) => {
                socket.broadcast.emit("document-update", data);
            });

            socket.on("disconnect", () => {
                console.log("User disconnected");
            });
        });
    }
    res.end();
}