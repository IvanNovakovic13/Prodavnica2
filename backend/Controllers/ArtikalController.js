const Artikal = require('../Models/ArtikalModel')

const createArtikal = async (req, res) => {
    try {
        const artikal = await Artikal.create(req.body)
        res.status(200).json(artikal)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getArtikals = async (req, res) => {
    try {
        const artikal = await Artikal.find()
        res.status(200).json(artikal)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getArtikal = async (req, res) => {
    try {
        const { id } = req.params
        const artikal = await Artikal.findById(id)
        res.status(200).json(artikal)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const deleteArtikal = async (req, res) => {
    try {
        const { id } = req.params
        const artikal = await Artikal.findByIdAndDelete(id)
        res.status(200).json("Artikal deleted successfully")
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const updateArtikal = async (req, res) => {
    try{
        const { id } = req.params
        const artikal = await Artikal.findByIdAndUpdate(
            {_id: id},
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        if(!artikal){
            res.status(404).json(`No artical with that id.`)
        }
        res.status(200).json(artikal)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    createArtikal,
    getArtikals,
    getArtikal,
    deleteArtikal,
    updateArtikal
}