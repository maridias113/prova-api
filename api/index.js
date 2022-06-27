import express, { json } from 'express';
import cors from 'cors';
import petcontroller from './controller/petcontroller.js'

const server = express();

server.use(cors());
server.use(express.json())
server.use(petController);

server.listen (process.env.PORT  , () => {
    console.log (`API conectado na porta ${process.env.PORT}`)
    
})