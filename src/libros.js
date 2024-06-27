const express = require("express")
const app = express()

app.use(express.json())

const infoLibros = [
    {
        id : 1,
        title: "El Señor De Los Anillos",
        author: "J. R. R. Tolkien",
        year: 1995
    },
    {
        id : 2,
        title: "It (eso)",
        author: "Stephen King",
        year: 1986
    },
    {
        id : 3,
        title: "Las ventajas de ser invisible",
        author: "Stephen Chbosky",
        year: 1999
    }
]

app.get("/books", (req, res) =>{
    res.json(infoLibros)
})

app.get("/books/:id", (req,res) =>{
    const idLibro = req.params.id

    const libro = infoLibros.find((e) => e.id == idLibro)
    res.json(libro)
})

app.listen(3000, console.log("Servidor iniciado"))