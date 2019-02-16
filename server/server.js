require('./config/config.js');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//servcios get, obtener registros y actualizar datos
app.get('/', function(req, res) {
    res.json('Hola a todos');
});

app.get('/usuario', function(req, res) {
    res.json('get usuario');
});

//servicios post, crear nuevos registros
app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }
});

//servicios put, actualizar
app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
});

//servicios delete, borrar datos
app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
});



app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT} ...`);
});