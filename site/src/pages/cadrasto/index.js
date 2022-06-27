import {usedate} from 'react '
import 'index.scss'
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { async } from 'regenerator-runtime';




export default function Cadrastar(){
    const [nome, sertNome] = useState('');
    const [peso , setName] = useState('0');
    const [raça , setName]  = useState('');
    const [idade , setName] = useState ('0');
    const [email , setName] = useState ('');



    const {idparams} = useParams

    useEffect(()  => {
        if (id