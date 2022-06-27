import { Router }from "express";
import { cadrastarPET , consultarPET} from '../repository/petrepository.js'

const server = Router();

server.post ('/pet/nome', async (req , resp ) => {
    try{
        const {nome } = req.query;

        const resultado = await cadrastarPET(nome);
        resp.send(resultado)


     }catch (err )    {
         resp.status(404).send({
             erro:err.message
         })
     } 
})

server.get('/pet', async (req, resp ) => {
    try{
        const msg = await consultarPET();
        resp.send(msg);

    }catch(err){
        resp.status(404).send({
             erro:err.message
        })
    }
})


export default server;