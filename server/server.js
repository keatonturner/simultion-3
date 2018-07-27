const massive = require('massive');
const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();
const con = require('./Controller');

const app = express();

app.use(bodyParser.json());
app.use(session, ({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
});

app.post('/api/auth/register', con.register);



app.listen(SERVER_PORT, () => {
    console.log(`listening on port: ${SERVER_PORT}`)
})