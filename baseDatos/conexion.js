const mysql = require('mysql2/promise');

const conexion = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    database: 'proyecto',
    password:'4255784fire',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = conexion;