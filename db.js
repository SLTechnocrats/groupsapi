const { Pool } = require('pg');


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
module.exports.pool = new Pool({
    user: 'postgres',
    host: 'myradon.cn8ujxqgl6pv.ap-south-1.rds.amazonaws.com',
    database: 'postgres',
    password: '$l&Myradon#2023',
    port: 5432, // Change as needed
    ssl: true, // Disable SSL
});
