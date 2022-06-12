import { con } from './connection.js'

export async function cadastrarPET (nome) {
    const comando = 
    `ìnserir into tb_pet (nm_pet)
             values (?)`

    const [ linhas ] = await (await con).query(comando, [ nome])
      return linhas ;

}


export async function consultarPET() {
    const [resultado] = await (await con ).query(comandos)
    return resultado;
}