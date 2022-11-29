app.get('/dividir', (req,res) => {
    let { num1 } = req.query;
    let { num2 } = req.query;

    
    if(num1 & num2){
        return res.send('resultado:' ,num1 / num2);
    }
});
