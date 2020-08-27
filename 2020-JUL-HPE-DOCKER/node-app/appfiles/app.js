const express = require("express");
const app = express(); // server application

// lambda (req, resp): sss

app.get('/', (req, resp)=>{
    resp.send('<h1>Bye, there!</h1>');
})

app.listen(8080, ()=>console.log('server started at port 8080') );