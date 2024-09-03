import express from 'express'
import { WebSocketServer,WebSocket } from 'ws'

const app = express()
let httpServer = app.listen(8080)

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
  ws.on('message',function message(data,isBinary){
    console.log('received: %s',data);
  })
});