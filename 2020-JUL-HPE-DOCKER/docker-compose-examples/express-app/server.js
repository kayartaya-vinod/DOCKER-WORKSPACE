const express = require("express"); // external module (node_modules)
const app = express(); // server application
const process = require('process'); // built in module
var count = 1;

const port = process.env.SERVER_PORT || 8080;

app.get('/kill', ()=>{
    // normal-exit; no need to restart the container
    process.exit(0);
});

app.get('/', (req, resp) => {

    count++;
    // simulating a random server crash
    // failure; restart the container (policy --> on-failure)
    if (count % 10 == 0) {
        process.exit(100); // -> 0 -> normal exit; non-zero -> error exit
    }

    resp.send('<h1>Hi, there!</h1>');
});

app.listen(port, () => console.log('server started at port', port));