var mysql = require('mysql');

//local mysql db connection
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'diatomic_iquote_user',
//     password : 'MqPTEVfaG5@wMky',
//     database : 'diatomic_IQuotes'
// });
// connection.connect();
// module.exports = connection;

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'tarek',
    password : '12345678',
    database : 'DigiCom'
});
connection.connect();
module.exports = connection;