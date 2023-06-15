import asiento from "../models/asiento.js"
import asiento from "../models/asiento.js"
import asiento from "../models/asiento.js"
const httpAsiento = {
    getAsiento: async (req, res) => {
        const asiento = await asiento.find()
        res.json({asiento})
    },
    postAsiento: async (req, res) => {
        try {
        const { codigo_asientos, asientos_comprados }=   req.body
        const Asiento = new Asiento({ codigo_asientos, asientos_comprados })
      await Asiento.save()

       res.json({Asiento})
        } catch (err) {
            res.json({err})
        }
    },
    deleteAsiento: async (req, res) => {
        const {codigo_asientos} = req.params
        const asiento = await asiento.findAndDelete({codigo_asientos})
        res.json({asiento})
    },
}

export default httpAsiento