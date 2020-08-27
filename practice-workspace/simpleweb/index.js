const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send('Hello, Express!');
});

app.listen(8080, () => console.log('Server started at port 8080'));