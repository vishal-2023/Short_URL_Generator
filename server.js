const express = require('express');
const route = require('./routes/route')
const dbConnnect = require('./db/databse')
require('dotenv').config();
const app = express();

app.use(express.json());
app.use('/api',route);
dbConnnect();

app.get('/',(req,res) => {
    return res.send("hello")
})

app.listen(process.env.PORT,() => {
    console.log(` server is running on PORT ${process.env.PORT}`)
})