// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const SocketOpen = require('ws');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.


wss.on('connection', (ws) => {

  console.log('Client connected');
  console.log(wss.clients.size);

  let size = { 
    size: wss.clients.size, 
    type: 'usercount'
  }

  wss.clients.forEach((client) => {

    client.send(JSON.stringify(size))

});


  ws.on('message', function (message) {

    let msg = JSON.parse(message);
    console.log(msg);

    if(msg.type === "postMessage") {
    msg.type = "incomingMessage";
    }

    if(msg.type === "postNotification") {
      msg.type = "incomingNotification";
    }


    console.log(`User ${msg.username} says ${msg.content} because ${msg.type} and ${msg.notification} and ${wss.clients.size}`);
    wss.clients.forEach(function each(client) {
      if (client.readyState === SocketOpen.OPEN) {
        const msgBack = JSON.stringify(msg);
        client.send(msgBack);
    
      }
    });
}); 

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected'); 

    size.size = wss.clients.size;
    console.log(size.size);
    wss.clients.forEach((client) => {

      client.send(JSON.stringify(size))
    

    });
  });
});