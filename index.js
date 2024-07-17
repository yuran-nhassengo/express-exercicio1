const express = require('express');
const cors = require('cors');

const port = 3030;

const app = express()

app.use(cors());
app.use(express.json())

let users = [
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

app.post('/user',(req,res) =>{
    const {n,c,m} = req.body;
    let newUser = {n,c,m}
    users.push(newUser);
    res.json({mm:"Usuario adicionando com sucesso",n});
})

app.listen(port,()=>{
    console.log('Servidor iniciado');
})