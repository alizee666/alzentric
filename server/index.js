/* eslint-disable no-console */


const http = require('http');
const app = require('./server');

const PORT = process.env.PORT || 8114;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server started, listening at: http://localhost:${PORT}`);
});
