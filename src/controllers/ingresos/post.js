const db = require('../../db') 

//funcion
const PostMethod = (req, res) => {
    var {efectivo, tpv, inbursa, scotia, date, total} = req.body

    const query = `INSERT INTO ingresos SET efectivo='${efectivo}', tpv='${tpv}', scotiabank='${scotia}', inbursa='${inbursa}', date='${date}', total=${total}`
    
    db.query(query, (e, r, f) => {
        if(e){
            res.send('Error')
            console.log(e)
        } else {
            res.send('Good')
        }
    })
}

//exports
module.exports = PostMethod