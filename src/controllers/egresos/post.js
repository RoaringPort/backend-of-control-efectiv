const db = require('../../db')

const PostMethod = (req, res) => {
    const {
        materia_prima,
        luz,
        fumigacion,
        salario1,
        salario2,
        salario3,
        telefono,
        contador,
        bodas,
        suegros,
        gas,
        mantenimiento,
        google,
        jimdo,
        date,
        total
    } = req.body
    const query = `INSERT INTO egresos SET materia_prima=${materia_prima}, luz=${luz}, fumigacion=${fumigacion}, salario1=${salario1}, salario2=${salario2}, salario3=${salario3},telefono=${telefono},contador=${contador}, bodas=${bodas},suegros=${suegros},gas=${gas},mantenimiento=${mantenimiento},google=${google}, jimdo=${jimdo}, date='${date}', total=${total}`

    db.query(query, (e, r, f) => {
        if(e){
            console.log(e)
            res.send(e)
        } else {
            res.send('Good')
        }
    })

}

module.exports = PostMethod