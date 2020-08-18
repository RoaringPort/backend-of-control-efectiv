const db = require('../db')

const PostDates = (req, res) => {
    const { date } = req.body
    const query = `SELECT * FROM ingresos, egresos WHERE ingresos.date='${date}' OR egresos.date='${date}'`

    db.query(query, (e,r,f)=> {
        if(e){
            console.log(e)
            res.send(e)
        } else {
            res.send(r)
        }
    })
}

module.exports = PostDates