//! 1) Require HTTP, it's a default node.js package
const http = require('http');
//! 2) Import the express app
const app = require('./backend/app');
//! 3) Debug
const debug = require('debug')('node-angular');

//+ 1.1) Shorthand for port number
const port = process.env.PORT || 3001;

//+ 2.1) Set a configuration to set our express port
app.set('port', port);

//+ 1.2) Create a new server
//+      Takes an eventListener, It's a function that will be executed for every incoming request no matter which path
const server = http.createServer(app); //+ 2.2) Pass app, to use the app for the incoming request

//* not necessary
const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

//* not necessary
const onListening = () => {
    const addr = server.address();
    const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
    debug('Listening on ' + bind);
};

//* not necessary
server.on('error', onError);
server.on('listening', onListening);

//+ 1.3) Listen to the port
server.listen(port, () => {
    console.log(`Express app running on port ${port}`);
});
