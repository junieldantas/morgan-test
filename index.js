const express = require('express') //add express
const morgan = require('morgan') //add morgan
var fs = require('fs') //add lib file
const app = express() //declare app

/*
* combined: complet log (FULL Info)
* tiny: simple version (METHOD, url, status, Time Request)
* common: (ip, timestamp + tiny)
* ":method :url :response-time" : custom method for use morgan
* 
*/
app.use(morgan('common', {
    stream: fs.createWriteStream('./logs/access.log', { flags: 'a' }) //write file log
})); //defined morgan for intercep requests

//GET Request
app.get('/', (req, res) => {
    res.send('Olá Teste com Morgan')
})

app.listen(3000, () => console.log('listening')) //define PORT and print console