const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'control-efectivo'
})

con.connect()

module.exports = con