// Load the MySQL pool connection
const pool = require('./database');

// App routes
const router = app => {

    app.get('/', (request, response) => {
        
        response.send({
            message: 'Welcome to the Node.js Express REST API for AWS Inmersion Day!'
        });

    });
        // Display all users

    app.get('/users', (request, response) => {

        pool.query('SELECT * FROM users', (error, result) => {

            if (error) throw error;
            
            console.log("Get Request Recieved")
            response.header("Access-Control-Allow-Origin", "*");
            response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            response.header('Access-Control-Allow-Headers', 'Content-Type');
            
            response.send(result);

        });

    });

}

// Export the router
module.exports = router;

