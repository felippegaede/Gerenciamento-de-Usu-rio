const express = require('express');
const consign = require('consign');
const bodyparser = require('body-parser');



let app = express();

app.use(bodyparser.urlencoded({extended: false, limit :'50mb'}));
app.use(bodyparser.json({limit: '50mb'}));

consign().include('routes').include('utils').into(app);

app.listen(4000, '127.0.0.1', () => {

    console.log('Servidor rodando');
});