import client from "../db/client.mjs";

const addUser = async (req, res) => {
    const { email, password } = req.body;

    const add = await client.query(
        "INSERT INTO users (email, password) VALUES ( $1, $2 ) RETURNING *;",
        [email, password]);
    res.status(201).send(`User added with ID: ${add.rows[0].id}`)
}

export default addUser