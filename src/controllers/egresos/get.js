const db = require('../../db')

const GetMethod = (req, res) => {
    query = `SELECT * FROM egresos`

    db.query(query, (e, r, f) => {
        if(e){
            console.log(e)
            res.send(e)
        } else {
            res.send(r)
        }
    })
}

module.exports = GetMethod