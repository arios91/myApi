
const fetch = require('node-fetch');
const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const cors = require('cors');
const port = process.env.PORT || 8080;


admin.initializeApp({
    credential: admin.credential.cert(keys.serviceAccountKey),
    databaseURL: `https://${keys.serviceAccountKey.project_id}.firebaseio.com`
})

const db = admin.firestore();

const app = express();



const corsOptions = {
    origin: function (origin, callback) {
        if(keys.whiteList.indexOf(origin) > 0){
            console.log('allowed');
            callback(null, true);
        }else{
            callback(new Error('Not Allowed By CORS'));
        }
    }
}

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }))

app.use(express.json());

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.send('INDEX TEST');
})


app.use('/petalosarte', require('./routes/petalosarte'))
app.use('/email', require('./routes/email'))




app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});