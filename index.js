const express = require('express')
const app = express()
const morgan = require('morgan');
const routes = require('./routes/index')
// settings

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
//Routes
app.use('/', routes)

//static files


app.listen(3000, ()=>{
    console.log('server on port 3000');
})