const { Sequelize } = require('sequelize'); // importa o sequelize

// instancia o sequelize com as configurações do caminho usuario qual banco e onde o mesmo esta rodadondo
const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    
    sequelize.authenticate(); // efetua a conexão com o bando como definido acima
    console.log('Conexão bem sucedida')

} catch (error) {
    console.log(`Não foi possivel conectar ao banco de dados: ${error}`);
}

module.exports = sequelize;