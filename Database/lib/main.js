var ini = require('ini');
var fs = require('fs');
var mysql = require('mysql');

// Loads modules
var database = new (require('./database.js'))();
var userType = new (require('./type.js'))();
var user = new (require('./user.js'))();
var school = new (require('./school.js'))();
var course = new (require('./course.js'))();
var group = new (require('./group.js'))();
var project = new (require('./project.js'))();
var application = new (require('./application.js'))();

// Loads MySQL config file
var config = ini.parse(fs.readFileSync('./.my.cnf', 'utf8'));

var connection = mysql.createConnection({
  host: 'localhost',
  user: config.client.user,
  password: config.client.password,
  database: 'projectary_tests',
  multipleStatements: true // Run queries with multiple statements
});

async function start() {
  try {
    // start database tests and their tables
    await database.start();
    
    await connection.connect();
    
    // start type of users table tests
    await userType.start(connection);
    // start user table tests
    await user.start(connection);
    // start school table tests
    await school.start(connection);
    // start course table tests
    await course.start(connection);
    // start group table tests
    await group.start(connection);
    // start project table tests
    await project.start(connection);
    // start application table tests
    await application.start(connection);

    await connection.end();
  } catch (error) {
    await connection.end();
    return;
  }
}

module.exports.start = start;