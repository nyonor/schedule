const app = require ("./app/app.js");
const server = require("./server/server.js");

// routes
const home = require('./routes/home.routes');
const user = require('./routes/user.routes');

app.use('/', home);
app.use('/user', user);

// server
const httpsServer = server.create(app);
server.start(httpsServer);