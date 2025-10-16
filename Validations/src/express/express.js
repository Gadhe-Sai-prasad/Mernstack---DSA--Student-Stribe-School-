const express = require('express');

const app = express();




app.get('/',(req,res) => {
    res.send('Hey,get response');
    
})
app.get('/si',(req,res) => {
    res.send('get 2')
})
app.listen(3000,() => {
    console.log("server running ")
})