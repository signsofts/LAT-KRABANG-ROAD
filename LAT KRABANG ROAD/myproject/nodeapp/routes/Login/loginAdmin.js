var connection = require('../../connect');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var jwt = require('jsonwebtoken');


var router = express();
router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

router.post('/auth', function (request, response) {
    var Email = request.body.Email;
    var password = request.body.password;

    const selectQuery = 'SELECT * FROM customers WHERE Email = ? AND password = ?';
    const insertQuery = 'INSERT INTO loglogin (ID_CUS, id, role, Name_CUS, Email, password, time) VALUES (?, ?, ?, ?, ?, ?, NOW())';

    connection.query(selectQuery, [Email, password], (err, results) => {
        if (err) {
            response.status(500).send('Internal Server Error');
            return;
        }

        // Check if any rows were returned
        if (results.length > 0) {
            // Authentication successful

            // Create a JWT token with email and role information
            const tokenPayload = {
                email: results[0].Email,
                role: results[0].role,
                id_cus: results[0].ID_CUS,
            };

            const secretKey = 'ppkuysus&nahee'; // Replace with your secret key
            const token = jwt.sign(tokenPayload, secretKey);

            // Insert login information into the login table
            const loginData = [
                results[0].ID_CUS, // ใส่ ID_CUS เข้าไปในข้อมูลการล็อคอิน
                results[0].id,
                results[0].role,
                results[0].Name_CUS,
                results[0].Email,
                results[0].password
            ];

            connection.query(insertQuery, loginData, (err, insertResults) => {
                if (err) {
                    response.status(500).send('Error inserting login data');
                    return;
                }

                // Send the token in the response
                response.status(200).json({ token: token });
            });
        } else {
            // Authentication failed
            response.status(401).send('Invalid email or password');
        }
    });
});
  

module.exports = router;