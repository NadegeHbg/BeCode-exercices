// Use the SELECT statement in a SELECT query to retrieve the email and password associated with the user from the database.

import client from "../db/client.mjs";
import getUsers from "./getUsers.mjs";

// In your Express route handler for the login form, use the req.body object to access the email and password values entered by the user.

// Compare the email and password values from the database with the ones entered by the user. If they match, the user is authenticated and you can proceed to log them in. If they do not match, you can return an error message to the user indicating that their login credentials are incorrect.

// Retrieve user from database
// const user = await db.query(
//     'SELECT email, password FROM users WHERE email = $1',
//     [req.body.email]
//   );

//   // Check if user exists and password matches
//   if (user.rows.length === 0 || user.rows[0].password !== req.body.password) {
//     return res.status(401).send('Incorrect email or password');
//   }

//   // If we reach here, the user is authenticated and we can log them in

const loginUser = async (req, res) => {
    try {
        const user = await client.query(`SELECT email, password FROM users WHERE email = $1`, [req.body.email]);

        if (user.rows.length === 0 || user.rows[0].password != req.body.password) {
            // console.log(user)
            console.log(typeof user.rows[0].password, user.rows[0].password)
            console.log(typeof req.body.password, req.body.password)
            return res.status(401).send('Incorrect email or password');

        }

        console.log(typeof user.rows[0].password, user.rows[0].password)
        console.log(typeof req.body.password, req.body.password)
        res.send('connexion of user successfull')

    } catch (err) {
        console.log(`impossible to access database with login ${err}`)
    }
};

export default loginUser;