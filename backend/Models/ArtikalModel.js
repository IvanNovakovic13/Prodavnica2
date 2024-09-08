const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const artikalSchema = mongoose.Schema(
    {
        naziv: {
            type: String,
            required: [true, "Dodajte naziv!"]
        },
        cena: {
            type: Number,
            required: [true, "Dodajte cenu!"]
        }
    }
) 

const Artikal = mongoose.model("artikal", artikalSchema)

module.exports = Artikal;