import express  from "express";

const usuarioController = (app) => {

app.get('/usuarios', function (req,res) {
    res.send("Rota ativada com GET USUARIOS") 
})
}

export default usuarioController    