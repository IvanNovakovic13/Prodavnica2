const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require('mongoose')
const articalRoute = require('./Routes/ArtikalRoute')
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json())

//Putanja HTTP zahteva
app.use("/api", articalRoute)

const PORT = 5000;

//Konekcija sa mongoDB-om
mongoose
    .connect("mongodb+srv://zivorad:123@cluster0.pf2r2iy.mongodb.net/Artikli?retryWrites=true&w=majority")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`) 
        })
    })
    .catch((error) => 
        console.log(error)
    ) 
    

