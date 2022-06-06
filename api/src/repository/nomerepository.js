server.get ('/usuario/nome') , async (req ,resp => {
    try {
        let a = {usuario} = req.body;
        let b = { resposta} = await nome (usuario);
   
    }
    catch (err){
        resp.send({
            erro:err.mensagem
        })
    }
})