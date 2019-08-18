const http = require('http')
const mysql = require('mysql');
const port = 3000

const host = 'inmddb-instance.cjmg0utwymwz.us-east-2.rds.amazonaws.com'
const user = 'INMD'
const password = 'Cloud1234'
const database = 'INMDDB'

const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});


const requestHandler = (request, response) => {
    console.log(request.url)

    connection.query('select * from users', function(err, rows, fields) {
        if (!err){
          console.log('Query response: ', rows);
          response.end(`Se devuelve el usuario: ${rows[0].name} con correo: ${rows[0].email}`)
        }
        else
          console.log('Error while performing Query.');
      });


}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
	    return console.log('something bad happened', err)
    }   

	console.log(`server is listening on ${port}`)
})
