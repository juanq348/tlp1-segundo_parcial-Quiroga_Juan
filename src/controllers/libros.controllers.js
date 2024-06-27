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

const obtenerLibros = (req, res) =>{
    res.json(infoLibros)
}

const obtenerLibroID = (req,res) =>{
    const idLibro = req.params.id

    const libro = infoLibros.find((e) => e.id == idLibro)
    res.json(libro)
}

const agregarLibro = (req, res) =>{
    const {id, title, author, year} = req.body

    const nuevoLibro = infoLibros.push(
        {
            id, title, author, year
        })
    res.json({message: "Se agrego el libro correctamente", nuevoLibro})
}

const editarLibro = (req, res) =>{
    const id = req.params.id
    const {title, author, year} = req.body

    const obtenerTitle = infoLibros.find((title) => title.id == id)
    obtenerTitle.title = title
    obtenerTitle.author = author
    obtenerTitle.year = year
    
    res.json({message:"Se actualizo el libro de forma exitosa"})
}

const borrarLibro = (req,res) =>{
    const id = req.params.id

    const obtenerTitle = infoLibros.find((title) => title.id == id)
    const indexTitle = infoLibros.indexOf(obtenerTitle)
    const titleBorrado = infoLibros.splice(indexTitle, 1)

    res.json({message: "Se borró el libro correctamente", titleBorrado})
}

module.exports = 
    {
        obtenerLibros,
        obtenerLibroID,
        agregarLibro,
        editarLibro,
        borrarLibro
    }