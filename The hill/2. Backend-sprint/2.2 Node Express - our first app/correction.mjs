import { users } from './users.mjs';
import pkg from 'pg'
import * as dotenv from 'dotenv'

dotenv.config();

const { Client } = pkg;
const client = new Client({
    user: 'userdb',
    host: 'localhost',
    database: 'users',
    password: process.env.PASSWD,
    port: 5432,
})

const UserTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id SMALLINT, 
    firstName VARCHAR(50), 
    lastName VARCHAR(50), 
    email VARCHAR(80), 
    ip CIDR);`;

const createTable = async (query) => {
    try {
        await client.connect();
        await client.query(query);
        return true
    } catch (error) {
        console.error(error.stack);
        return false
    } finally {
        await client.end();
    }
}

createTable(UserTableQuery)
    .then(result => {
        if (result) {
            console.log('Table Created');
        }
    })

// const promises = users.map(async (user) => {
//     try {
//         await client.connect();// gets connection
//         await client.query(
//             `INSERT INTO users(firstName, lastName, email, ip) VALUES ($1, $2, $3, $4) RETURNING *`, [user.firstName, user.lastName, user.email, user.ip]); // sends queries
//         return true;
//     } catch (error) {
//         console.error(error.stack);
//         return false;
//     } finally {
//         await client.end(); // closes connection
//     }
// });

// await Promise.all(promises)
//     .then(console.log(promises))