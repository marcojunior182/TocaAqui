// abrindo conexão com o bando de dados
console db_config = require('../config/database.js'),
    mysql = require('mysql'),
    db_connection = mysql.createConnection(db_config)
