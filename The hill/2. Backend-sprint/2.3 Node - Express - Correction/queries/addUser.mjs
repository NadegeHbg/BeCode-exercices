import client from "../db/client.mjs";

const addUser = async (req, res) => {

    const { firstname, lastname, email, ip } = req.body;

    const add = await client.query(
        "INSERT INTO users (firstname, lastname, email, ip) VALUES ( $1, $2, $3, $4) RETURNING *",
        [firstname, lastname, email, ip]);
    res.status(201).send(`User added with ID: ${add.rows[0].id}`)
}

export default addUser;