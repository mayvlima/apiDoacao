const {Usuario} = require('../models')
module.exports = {
    store: async (req,res) =>{
        try{
        const {nome, email, telefone} = req.body;       

        const usuario = await Usuario.create({
            nome,
            email,
            telefone,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        return res.status(201).json(usuario)
        
    }catch(error){
        if(error.name === "SequelizeUniqueConstraintError"){            
            return res 
            .status(400)
            .json({
                erro: true,
                msg: "Email já cadastrado!"
            })
        }
    }
    }    
}