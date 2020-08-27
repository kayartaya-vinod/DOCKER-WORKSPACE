const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();

app.get('/', (req, resp) => {
    client.get('visits', (err, visits) => {
        if (err) throw err;
        resp.send('No.of visist is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    })
});

app.listen(8080, () => console.log("server started @ port 8080"))