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

app.post("/books", (req, res) =>{
    const {id, title, author, year} = req.body

    const nuevoLibro = infoLibros.push(
        {
            id, title, author, year
        })
    res.json({message: "Se agrego el libro correctamente", nuevoLibro})
})

app.put("/books/:id", (req, res) =>{
    const id = req.params.id
    const {title, author, year} = req.body

    const obtenerTitle = infoLibros.find((title) => title.id == id)
    obtenerTitle.title = title
    obtenerTitle.author = author
    obtenerTitle.year = year
    
    res.json({message:"Se actualizo el libro de forma exitosa"})
})

app.listen(3000, console.log("Servidor iniciado"))