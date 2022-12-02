// import pkg from 'pg'
// const client = pkg.Client
// await client.connect()

// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()

import { users } from './users.mjs';
import pkg from 'pg'
import * as dotenv from 'dotenv'

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    user: 'userdb',
    host: 'localhost',
    database: 'users',
    password: process.env.PASSWD,
    port: 5432,
})

pool.connect((err) => {
    if (err) {
        console.error("connection error", err.stack);
    } else {
        console.log("connected");
    }
});


let UserTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id SMALLINT, 
    firstName VARCHAR(50), 
    lastName VARCHAR(50), 
    email VARCHAR(80), 
    ip CIDR);`;

pool.query(UserTableQuery, (err, res) => {

    if (err) {
        console.error("connection error c'est ici que ça beug", err);
    } else {
        console.log(res.rows);
    }
});

users.forEach((user) => {
    const text =
        "INSERT INTO users(firstName, lastName, email, ip) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [user.firstName, user.lastName, user.email, user.ip];
    pool.query(text, values, (err, res) => {
        if (err) {
            console.error("connection error non non ici", err);
        } else {
            console.log(res.rows[0]);
        }
    });
});

await pool.end()
