const express = require("express")
const app = express()

app.use(express.json())

app.use(require("./routes/libros.routes.js"))

app.listen(3000, console.log("Servidor iniciado"))