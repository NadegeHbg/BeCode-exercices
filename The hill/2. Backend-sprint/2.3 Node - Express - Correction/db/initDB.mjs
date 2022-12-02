import client from "./client.mjs";
import { users } from "./users.mjs";
import UserTableQuery from "../queries/createTable.mjs"

const initDB = async () => {

    await client.query(UserTableQuery)

    const userMap = users.map((user) => { // on insert chaque élément dans la table
        return client.query(`INSERT INTO users(firstName, lastName, email, ip) VALUES ($1, $2, $3, $4) RETURNING *`, [user.firstName, user.lastName, user.email, user.ip]);
    })

    await Promise.all(userMap);
}

export default initDB;