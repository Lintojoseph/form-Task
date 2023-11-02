const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors=require('cors')

const app=express()

app.use(
    cors({
      origin: 'http://127.0.0.1:5173',
      methods: ["GET", "POST", "DELETE", "PUT","PATCH"],
      credentials: true
    })
  );
  

// app.use('/',UserRouter)
// app.use('/admin',AdminRouter)

//database
mongoose.connect(process.env.DB)
const db=mongoose.connection;
db.on('error',(error)=>console.log(error))
db.once('open',()=> console.log('connected to database'))

//server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});