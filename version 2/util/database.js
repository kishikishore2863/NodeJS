const mysql =require('mysql2');
const pool =mysql.createPool({
    host:'localhost',
    user:'root',
    database:'Node_Version_1',
    password:'Honey Baby'
})
module.exports=pool.promise();