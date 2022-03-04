
const fetch = require('node-fetch');
const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const serviceAccount = require('./keys/ServiceAccountKey.json');
const cors = require('cors');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
})

const db = admin.firestore();

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }))

app.use(express.json());

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.send('INDEX TEST');
})


app.use('/petalosarte', require('./routes/main'))


app.listen(port, () => {console.log(`Server started on port: ${port}`)});