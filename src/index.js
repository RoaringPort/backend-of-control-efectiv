const app = require('./app')

async function main() {
    
    const port = app.get('port')

    await app.listen(port)
    console.log(`Server in port: ${port}`)
}

main()