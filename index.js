const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();

// const data = require('data.json')
app.use(cors());
app.get('/', (req, res) => {
    res.send('API Running')
})
app.get('/data', (req, res) => {
    res.send(data)
})
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lla9vff.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

try {
    const serviceCollection = client.db('Mobile').collection('categories');
    // const reviewCollection = client.db('Mobile').collection('categories');
        app.get('/allcategory', async (req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query);
            const category = await cursor.toArray();
            res.send(category);
    });
}
finally {

}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})