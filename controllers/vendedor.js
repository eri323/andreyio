import Vendedor from "../models/vendedor.js"

const httpVendedor = {
    getVendedor: async (req, res)=>{
        try {
            const vendedor = await Vendedor.find()
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getVendeorId: async (req, res)=>{
        const {id}= req.params
        try {
            const vendedor = await Vendedor.findById({id})
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postVendedor : async (req, res)=>{
        try {
            const {Nombre}= req.body
            const vendedor = new Vendedor({Nombre})
            await vendedor.save()
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putVendedor: async (req, res)=>{
        try {
            const {id}=req.params
            const {Nombre}= req.body
            const vendedor = await Vendedor.findByIdAndUpdate(id,{Nombre},{new:true})
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    deleteVendedor: async (req, res)=>{
        try {
            const {id}= req.params 
            const vendedor = await Vendedor.findByIdAndDelete({id})
            res.json({vendedor})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putVendedorinac: async (req, res) => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putVendedoract: async (req, res) => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })
        }
    }

}

export default httpVendedor