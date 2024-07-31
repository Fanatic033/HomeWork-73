const express = require('express');
const app = express();
const port = 8000;

const password = 'world'

const Vigenere = require('caesar-salad').Vigenere;


app.get('/encode/:text', (req, res) => {
    const encodedText = Vigenere.Cipher(password).crypt(req.params.text);
    res.send(encodedText);
})

app.get('/decode/:text', (req, res) => {
    const decodeText = Vigenere.Decipher(password).crypt(req.params.text);
    res.send(decodeText);
})
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}/`);
})
