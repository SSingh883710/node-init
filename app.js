const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res, next) => {
    res.send(
        "Hey we are up & running at slash."
    )
});

app.listen(PORT, () => {
    console.log("we are up & running");
});