const {Router} = require("express")
const router = Router()

const {obtenerLibros, obtenerLibroID, agregarLibro, editarLibro, borrarLibro} = require("../controllers/libros.controllers.js")

router.get("/books", obtenerLibros)

router.get("/books/:id", obtenerLibroID)

router.post("/books", agregarLibro)

router.put("/books/:id", editarLibro)

router.delete("/books/:id", borrarLibro)

module.exports = router