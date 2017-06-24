const app = require("./custom-express");
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

app.set('io', io);

http.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`);
  console.log(`Para derrubar o servidor CTRL+C`);
});
