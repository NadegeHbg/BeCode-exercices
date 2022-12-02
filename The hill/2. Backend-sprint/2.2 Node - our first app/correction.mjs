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
    id SERIAL, 
    firstName VARCHAR(50), 
    lastName VARCHAR(50), 
    email VARCHAR(80), 
    ip CIDR);`;

await client.connect(); // on connecte

await client.query(UserTableQuery) //  on crée la table si elle n'existe

const userMap = users.map((user) => { // on insert chaque élément dans la table
    return client.query(`INSERT INTO users(firstName, lastName, email, ip) VALUES ($1, $2, $3, $4) RETURNING *`, [user.firstName, user.lastName, user.email, user.ip]);
})
// on obtient un tableau de promesses
// console.log(userMap)

// On attend que toutes les promesses soient résolues et on obtient un tableau de résultats
await Promise.all(userMap);
// console.log(userMap)
await client.end(); //close connection


// ==========================================================================


// const createTable = async (query) => {
//     try {
//         await client.query(query);
//         return true
//     } catch (error) {
//         console.error(error.stack);
//         return false
//     }

// }

// const result = await createTable(UserTableQuery);
// console.log(result);

// insertion dans la DB
// async => renvoie promesse

// const promises = users.map(async (user) => {
//     try {
//         await client.query(
//             `INSERT INTO users(firstName, lastName, email, ip) VALUES ($1, $2, $3, $4) RETURNING *`, [user.firstName, user.lastName, user.email, user.ip]); // sends queries
//         return true;
//     } catch (error) {
//         console.error(error.stack);
//         return false;
//     }
// });

// await Promise.all(promises)
//     .then(console.log(promises))