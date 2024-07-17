const express = require('express');
const cors = require('cors');
const port = 3030;

const app = express()

app.use(cors());

const users = [
    {
    nome:'Yuran',
    contacto:"849102433",
    mensagem: "Sou BackEnd"
    },
    {
        nome:'Nhassengo',
        contacto:"849102433",
        mensagem: "Sou FrontEnd"
        }
    
];

app.get('/',(req,res) =>{
    res.type('application/json');
    res.send(users);
});

app.listen(port,()=>{
    console.log('Servidor iniciado');
})