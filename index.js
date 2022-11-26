const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// const data = require('data.json')
app.use(cors());
app.get('/', (req, res) => {
    res.send('API Running')
})
app.get('/data', (req, res) => {
    res.send(data)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})