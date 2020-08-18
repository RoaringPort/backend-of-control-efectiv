//express
const express    =  require('express')
const cors       =  require('cors')
const bodyPaser  =  require('body-parser')  
const app        =  express()

//routes
const In    =  require('./routes/ingresos')
const Out   =  require('./routes/egresos')
const Dates =  require('./routes/dates')

//settings
app.set('port', process.env.PORT || 4000)
app.use(cors())
app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({ extended:true }))

//middleware
app.use(In)
app.use(Out)
app.use(Dates)

module.exports = app