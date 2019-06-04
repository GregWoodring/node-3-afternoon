const express = require('express');
const massive = require('massive');
require('dotenv').config();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

const productsController = require('./controllers/products_controller');

let app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err => {
    console.log('Error connecting to database: ' + err);
})

app.get('/api/products', productsController.getAll);
app.get('/api/products/:id', productsController.getOne);
app.put('/api/products/:id', productsController.update);
app.post('/api/products/', productsController.create);
app.delete('/api/products/:id', productsController.delete);


app.listen(SERVER_PORT, ()=> {
    console.log('listening on port ' + SERVER_PORT)
})