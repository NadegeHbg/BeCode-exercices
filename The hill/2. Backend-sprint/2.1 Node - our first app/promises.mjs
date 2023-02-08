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
// on connecte
console.log(1)

client.connect()
    .then(() => {
        console.log(2)
        //  on crée la table si elle n'existe
        return client.query(UserTableQuery)
    })
    .then(() => {
        console.log(3)
        const userMap = users.map((user) => { // on insert chaque élément dans la table
            return client.query(`INSERT INTO users(firstName, lastName, email, ip) VALUES ($1, $2, $3, $4) RETURNING *`, [user.firstName, user.lastName, user.email, user.ip]);
        })
        // on obtient un tableau de promesses
        // console.log(userMap)

        // On attend que toutes les promesses soient résolues et on obtient un tableau de résultats
        return Promise.all(userMap);
        // console.log(userMap)
    })
    .then(() => {
        console.log(4)
        client.end(); //close connection
    });

console.log(5)