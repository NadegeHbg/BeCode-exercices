import client from "../db/client.mjs";

const getUsers = async (req, res) => {
    const users = await client.query('SELECT * FROM users');
    res.send(users.rows)
}

export default getUsers