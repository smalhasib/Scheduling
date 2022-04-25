const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const database = require('./config/Database')

dotenv.config()
app.use(express.json())
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);


app.use('/', (req, res)=>{
    res.json("Hello World...")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening at port http://localhost:${process.env.PORT}`)
})