//Database connection config
const mysql = require('mysql');

//Get Properties
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('mysql.properties');

const config = {
    host: properties.get('host'),
    user: properties.get('user'),
    password: properties.get('password'),
    database: properties.get('database'),
};
    
const pool = mysql.createPool(config);

module.exports = pool;