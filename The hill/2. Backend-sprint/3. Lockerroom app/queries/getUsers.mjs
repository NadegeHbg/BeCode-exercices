import client from "../db/client.mjs";

const getUsers = async (req, res) => {
    try {
        const users = await client.query('SELECT * FROM users');
        res.send(users.rows);
    } catch (err) {
        console.log(`unable to connect ${err}`)
    }
}

export default getUsers