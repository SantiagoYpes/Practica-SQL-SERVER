
const express = require('express') // Importar la libreria de express
const cors = require('cors')
const app = express()  // Inicializar el express
const port = 3000

const routers = require("./routers/routers")

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(
    express.json({
        type:"*/*"
    })
)
app.use(cors())

app.use(routers)



app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})