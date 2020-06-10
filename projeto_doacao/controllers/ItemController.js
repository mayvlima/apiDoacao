const {Item} = require('../models')
module.exports = {
    index: async (req, res) =>{
        try{
            const itens = await Item.findAll()
            return res.status(200).json(itens)
        }catch(error){
            if(error.name === "SequelizeConnectionRefusedError"){
                return res 
                .status(400)
                .json({
                    erro: true,
                    msg: "Erro ao tentar se conectar com o Banco de Dados"
                })
            }            
           
        }        
    },

    store: async (req,res) =>{
        try{
        const {nome, descricao} = req.body;
        
        const item = await Item.create({
            nomeItem: nome,
            descricao,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        return res.status(201).json(item)
    }catch(error){
        return res.status(400).json(error)
    }
    },

    delete: async (req,res) =>{
        try{
        const {id} = req.params
        
        const item = await Item.findOne({
            where:{
                id
            }
        })       
        
        await item.destroy()

        return res.status(200).send()
    }catch(error){
        return res.status(400).json(error)
    }
    }
   
}