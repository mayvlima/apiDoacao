const {Item, Troca, Usuario, ItensTroca} = require('../models')
module.exports = {
    index: async (req, res) =>{
        try{
            const trocas = await Troca.findAll({
              include:[             
              {
                  model:Item,
                  as:"itensDaDoacao",
                  through: { attributes: [] },
                  attributes:["id", "nomeItem"],
                                   
              },              
              {
                model:Usuario,
                as: 'solicitante',
                attributes:["id", "nome"]
              },
            ],            
            attributes:["id", "descricao"]
            })
            
            return res.status(200).json(trocas)
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
        const{solicitante, descricao, itens} = req.body
        
        const troca = await Troca.create({            
            idReceptor: solicitante,
            descricao: descricao,
            status: "aberta",
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        await troca.addItensDaDoacao(itens)
        
       
                    

        return res.status(201).json(troca)
    }catch(error){
        console.log(error)
        return res.status(400).json(error)
    }
    },

    update: async (req,res) =>{
        try{
        const {idDoacao, idUsuarioLogado} = req.body
        
        const troca = await Troca.findOne({
            where:{
                id: idDoacao
            }
        })
        
        console.log(troca)

        if(!troca){
            return res.status(400).json({erro:true, mgs:"Doação não encontrada!"})
        }else{
            if(troca.idReceptor === idUsuarioLogado){
                    await troca.update(                    
                    {status: "finalizado"})
                return res.status(200).json({msg:"Doação finalizada"})
            }else{
                return res.status(400).json({erro:true, mgs:"Usuário não tem permissão para finalizar doação!"}) 
            }
        }       
    }catch(error){
        return res.status(400).json(error)
    }
    }
   
}