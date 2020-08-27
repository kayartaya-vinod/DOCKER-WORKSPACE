const express = require('express');
const app = express();
const process = require('process');

app.get('/', (req, resp) => {
    resp.send('<h1>Hi, there!</h1>');
});

app.get('/err', (req, resp)=>{
    process.exit(0);
})

app.listen(8080, () => console.log('Server started at port 8080'));