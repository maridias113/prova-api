server.get ('/usuario/nome') , async (req ,resp => {
    try {
        const {usuario}= req.body;
        const resposta = await nome (usuario);
   
    }
    catch (err){
        resp.send({
            erro:err.mensagem
        })
    }
})