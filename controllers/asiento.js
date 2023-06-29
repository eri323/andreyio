
import asiento from "../models/asiento.js"
const httpAsiento = {
    getAsiento: async (req, res) => {
        try {
            const asiento = await asiento.find()
            res.json({ asiento })
        } catch (error) {
            res.status(400).json({ error })
        }
    
    },
    getAsientoId: async (req, res) => {
        const {id}=req.params
        try {
            const asiento = await asiento.find({id})
            res.json({ asiento })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postAsiento: async (req, res) => {
        try {
            const { codigo_asientos, asientos_comprados }=   req.body
            const Asiento = new asiento({ codigo_asientos, asientos_comprados })
       asiento.save()

       res.json({asiento})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    deleteAsiento: async (req, res) => {
        try {
            const { id } = req.params
            const asiento = await asiento.findByIdAndDelete({ id })
            res.json({ asiento })  
        } catch (error) {
            res.status(400).json({ error })
        }
        
    },
    putAsiento: async (req, res) => {
        try {
            const { id } = req.params
            const { codigo_asientos,  asientos_comprados } = req.body
            const asiento = await asiento.findByIdAndUpdate(id, {codigo_asientos, asientos_comprados}, { new: true })
            res.json({asiento}) 
        } catch (error) {
            res.status(400).json(error)
        }
       
    },
    putAsientoinac: async (req, res) => {
        try {
            const { id } = req.params
            const asiento = await asiento.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ asiento })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putAsientoact: async (req, res) => {
        try {
            const { id } = req.params
            const asiento = await asiento.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ asiento })
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}

export default httpAsiento