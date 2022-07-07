const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const { notFound , errorHandler}  = require ('./middlewares/errorMiddleware.js')



//DB connection
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))
app.use(cors())
app.use(express.json())
app.use('/app', routesUrls)


app.use(notFound)
app.use(errorHandler)

//server connection
app.listen(4000, ()=>console.log("Server is up and running"))





