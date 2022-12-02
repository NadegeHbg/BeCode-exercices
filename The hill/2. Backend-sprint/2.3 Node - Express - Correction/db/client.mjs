import pkg from 'pg'
import * as dotenv from 'dotenv'

dotenv.config();

const { Client } = pkg;
const client = new Client({
    user: 'userdb',
    host: 'localhost',
    database: 'users',
    password: process.env.DBPASSWORD,
    port: 5432,
})

export default client;