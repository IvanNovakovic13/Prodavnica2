const express = require("express")
const { createArtikal, getArtikals, getArtikal, deleteArtikal, updateArtikal} = require("../Controllers/ArtikalController")
const router = express.Router()

//Kreiranje artikala
router.post("/artikli/" , createArtikal)

//Uzimanje svih artikalova
router.get("/artikli/" , getArtikals)

//Uzimanje jednog artikala sa njegovim id-om
router.get("/artikli/:id" , getArtikal)

//Brisanje artikala
router.delete("/artikli/:id" , deleteArtikal)

//Azuriranje artikala
router.put("/artikli/:id" , updateArtikal)

module.exports = router