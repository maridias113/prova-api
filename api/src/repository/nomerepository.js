server.get ('/usuario/consultar ') , async (req ,resp => {
    try {
        let a = {nome} = req.body;
        let b = { resposta} = await nome (nome);
   
    }
    catch (err){
        resp.send({
            erro:err.mensagem
        })
    }
});