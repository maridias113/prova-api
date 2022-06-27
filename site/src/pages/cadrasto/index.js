import {usedate} from 'react '
import 'index.scss'
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { async } from 'regenerator-runtime';




export default function Cadrastar(){
    const [nome, sertNome] = useState('');
    const [peso , setName] = useState('0');
    const [raca , setName]  = useState('');
    const [idade , setName] = useState ('0');
    const [email , setName] = useState ('');
    
}


    const {idparams} = useParams

    useEffect(()  => {
        if (idparams)
          CarregarServiço();
    }


 async function CadrastarServiço(){
    const res = await BuscarId(idparams)
    
    setnome (res.Name);
    setemail (res.email);
    setraca (res.raca);
    setpeso (res.peso);
    setidade (res.idade);

}


async  function ClickCadrastrar(){
    try{
        if(id ==3){
            const NovoPet =await cadrastarServiços(nome , email , raca , peso , idade )

            toast .sucess('petizinho cadrastado')

        } catch (err){
            toast(err.response.data.erro)
        }
    }


function Cadrasto (){
    setnome ('');
    setemail ('');
    setraca ('');
    setpeso ('');
    setidade ('');
})

