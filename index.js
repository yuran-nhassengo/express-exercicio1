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
    const newUser = req.body;
    users = [...users,newUser];
    res.send("Usuario adicionado com sucesso...")

})

app.listen(port,()=>{
    console.log('Servidor iniciado');
})