import mysql from 'mysql2' // Uses Default import

import { connectionInfo as credintials } from './password.js' // Uses specific import

// Connect to mysql database
const connection = mysql.createConnection(credintials)

// run a simple query on the database
// the query method takes two arguments, a query and a function
connection.query(
    'SELECT * FROM movies',
    function (error, results){ // Function Literal
        console.log(error)
        console.table(results)
        connection.destroy()
    }
)



// console.table(results)