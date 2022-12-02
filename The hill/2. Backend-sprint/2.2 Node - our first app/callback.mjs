import { users } from "./users.mjs";
import pkg from "pg";
import * as dotenv from "dotenv";

const { Client } = pkg;

dotenv.config();

const client = new Client({
    user: 'userdb',
    host: 'localhost',
    database: 'users',
    password: process.env.PASSWD,
    port: 5432,
})

client.connect((err) => { //connect
    if (err) {
        console.error("connection error", err.stack);
        return
    } else {
        console.log("connected");
    }

    let UserTableQuery = `CREATE TABLE users (id SERIAL, firstName TEXT, secondName TEXT, email TEXT, ip CIDR);`;

    client.query(UserTableQuery, (err, res) => { //create table
        if (err) {
            console.error("connection error", err);
            return
        } else {
            console.log(res.rows);
        }

        let insertedUser = 0
        users.forEach((user) => { //insertion de chaque user à l'intérieur de la table
            const text =
                "INSERT INTO users(firstName, secondName, email, ip) VALUES ($1, $2, $3, $4) RETURNING *";
            const values = [user.firstName, user.lastName, user.email, user.ip];
            client.query(text, values, (err, res) => {
                if (err) {
                    console.error("connection error", err);
                } else {
                    console.log(res.rows[0]);
                }

                insertedUser++;
                if (insertedUser === users.length) {
                    client.end() //close la connection 
                }
            });
        });
    });
});