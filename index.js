const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json ({
        'greeting' : 'Hello World!' })
});

app.post('/', (req, res) => {
    const name = req.body.name;
    const obj = {
        'greetings' : "Hello" + name
    }
    res.send(obj);
});
    app.listen(3000, () =>
    console.log("Running at port 3000!"));