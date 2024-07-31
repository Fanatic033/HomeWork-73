const express = require('express');
const app = express();
const port = 8000;

app.get('/:text', (req, res) => {
    res.send(req.params.text);
})

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}/`);
})