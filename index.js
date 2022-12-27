const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

const port = 3000;

/**
 * engine e view engine
 */
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

/**
 * Midllers para ler o corpo da requisição
 */

app.use(
    express.urlencoded({
        extended: true
    })
);

/**
 * Corpo da requisição como json
 */
app.use(express.json());

/**
 * definindo caminho dos arquivos staticos.
 */
app.use(express.static('public'));



/**
 * executando a aplicação
 */
app.listen(port, ()=>{
    console.log(`Aplicação rodando em : http://localhost:${port}`);
})