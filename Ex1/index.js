/*const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/' , (req, res) => {
    res.send('mensagem: ok, ativo.')
});*/



const express = require('express');
const { get } = require('prompt');
const app = express();

app.get('/', (req, res) => {
    res.send('Calculadora')

});



app.get('/somar', (req,res) => {
    let { num1 } = req.query;
    let { num2 } = req.query;
if(num1 & num2){
    return res.send('resultado:' ,num1 + num2);
}
});
   






app.listen(3000, (err) =>{
    if(err){
        console.log('servidor inativo')
    }else{
        console.log('servidor ativo')
    }
})