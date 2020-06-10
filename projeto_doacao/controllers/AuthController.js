const {Usuario} = require('../models')

module.exports = {
    index: async (req, res) =>{
        try{
            const {email} = req.body

            const usuario = await Usuario.findOne({
                where:{
                    email
                },
                attributes:['id','nome']
            })

            if(!usuario){
                return res.status(400).json({erro:true, mgs:"Email não cadastrado."}) 
            } else {
            return res.status(200).json(usuario)
            }
        }catch(error){
            return res.status(400).json(error)
        }                
    }
}