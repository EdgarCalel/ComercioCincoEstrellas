const express = require('express')
const app = express()
const morgan = require('morgan');
const routes = require('./routes/index')
const cors = require('cors')
// settings
app.use(cors())
// Middlewares
app.use(morgan('dev'))
app.use(express.json())
//Routes
app.use('/', routes)

//static files


app.listen(process.env.PORT || 4000, ()=>{
    console.log('server on port 4000');
})