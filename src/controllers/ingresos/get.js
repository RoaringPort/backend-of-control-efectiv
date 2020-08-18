const db = require('../../db')

//functions
const GetMethod = (req, res) => {
    const query = 'SELECT * FROM ingresos'
    
    db.query(query, (e, r, f) => {
        if(e){
            res.send('Error on field', e)
        } else {
            res.send(r)
        }
    })
}

//
module.exports = GetMethod
